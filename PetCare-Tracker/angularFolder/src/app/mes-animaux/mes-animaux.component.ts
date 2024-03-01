import {Component, Injectable, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Animal} from "../animal";
import {AnimalService} from "../services/animal-service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { AnimalModel } from '../animal-model';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {OwnerService} from "../services/owner-service";
import {Appointment} from "../appointment";
import {OwnerModel} from "../owner-model";


@Component({
  selector: 'app-mes-animaux',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './mes-animaux.component.html',
  styleUrl: './mes-animaux.component.css',
})

@Injectable({
  providedIn: 'root'
})

export class MesAnimauxComponent implements OnInit{

  animals: Animal[] | undefined;
  isAddingAnimal = false;
  selectedAnimal: AnimalModel | undefined;
  selectedOwnerId: number | undefined;
  errors: { [fieldName: string]: string } = {};
  private currentUserEmail: any;
  private ownerId: number | undefined;
  public tempAppointments: Appointment[] = [];



  constructor(private animalService: AnimalService, private ownerService: OwnerService, private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    const userId = 2; // Pour l'instant en dur
    const url = 'http://localhost:8080/api/user/' + userId;
    this.animalService.findAll(url).subscribe(data => {
      this.animals = data;

      if (data.length > 0) {
        const ownerId = userId;  // Get the owner ID
        this.ownerService.getOwnerById(ownerId).subscribe(owner => {
          localStorage.setItem('currentUserEmail', owner.email);
          this.currentUserEmail = owner.email;
          this.ownerId = ownerId;
          console.log('currentUserEmail:', owner.email)
        });
      }

      this.http.get<Appointment[]>(`http://localhost:8080/api/owners/${userId}/appointments`)
        .subscribe(appointments => {
          this.tempAppointments = appointments;
        });


    });
  }

  showAnimalDetails(animal: Animal) {
    this.selectedAnimal = animal;
  }

  get appointments(): Appointment[] | undefined {
    return this.tempAppointments;
  }

  getAppointmentsForAnimal(animalId: number): Appointment[] {
    return this.tempAppointments.filter(appointment => appointment.animal.id === animalId);
  }

  hasAnyAppointments(): boolean {
    return this.tempAppointments.some(appointment => appointment.animal);
  }

  calculateAge(birthday: Date | undefined): string {
    if (!birthday || birthday.getFullYear() === 1900) {
      return "Age Inconnu";
    }

    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age === 0) {
      // Less than a year old
      const months = today.getMonth() - birthDate.getMonth() +
        (12 * (today.getFullYear() - birthDate.getFullYear()));
      return months + ' mois';
    } else {
      return age + ' an(s)';
    }
  }

  clearInputsAndEnable() {
    this.selectedAnimal = { ...{
        id: 0,
        owner: 0,
        name: "",
        race: "",
        gender: "",
        birthday: new Date(1900, 0, 1),
        weight: 0,
        height: 0,
        healthCondition: "",
        lastVisit: new Date(0),
        notes: "",
        picture: ""
      } };
    this.isAddingAnimal = false; // Temporarily toggle visibility
    setTimeout(() => { this.isAddingAnimal = true; }, 0);
  }

  checkoutForm = this.formBuilder.group({
    // Animal checkoutForm
    name: ['', Validators.required],
    race: ['', Validators.required],
    gender: ['', Validators.required],
    birthday: ['', Validators.required],
    weight: ['', Validators.required],
    height: ['', Validators.required],
    healthCondition: ['', Validators.required],
    lastVisit: ['', Validators.required],
    notes: ['', Validators.required],
    picture: ['', Validators.required],

    // Appointment checkoutForm
    concernedAnimal: ['', Validators.required],
    appointmentDateTime: ['', Validators.required],
    appointmentType: ['', Validators.required],
    appointmentLocation: ['', Validators.required],
    appointmentNotes: ['', Validators.required],
  });


  validateAnimal(animal: Animal): { isValid: boolean, errors: { [fieldName: string]: string } } {
    this.errors = {}; // Clear previous errors
    const nameRegex = /^[a-zA-Z\u00C0-\u00FF]*$/;
    const raceRegex = /^[a-zA-Z\u00C0-\u00FF]*$/;
    const conditionRegex = /^[a-zA-Z\u00C0-\u00FF]*$/;
    const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    const numberRegex = /^[0-9]+$/;
    const maxNotesLength = 500;


    let valueName = this.checkoutForm.value.name;
    let valueRace = this.checkoutForm.value.race;
    let valueGender = this.checkoutForm.value.gender;
    let valueBirthday = this.checkoutForm.value.birthday;
    let valueWeight = this.checkoutForm.value.weight;
    let valueHeight = this.checkoutForm.value.height;
    let valueHealthCondition = this.checkoutForm.value.healthCondition;
    let valueLastVisit = this.checkoutForm.value.lastVisit;
    let valueNotes = this.checkoutForm.value.notes;

    console.log('name:', this.checkoutForm.value.name);
    if (typeof valueName === "string") {
      console.log('nameRegex test result:', nameRegex.test(valueName));
    }

    console.log('race:', this.checkoutForm.value.race);
    console.log('raceRegex test result:', raceRegex.test(<string>valueRace));

    console.log('gender:', this.checkoutForm.value.gender);
    console.log('raceRegex test result:', raceRegex.test(<string>valueGender));

    if (typeof valueHealthCondition === "string") {
      if (valueHealthCondition.length == 0) {
        (this.errors)['healthCondition'] = 'La condition est obligatoire.';
      }
    }

    if (typeof valueName === "string") {
      if (valueName.length == 0) {
        (this.errors)['name'] = 'Le nom est obligatoire.';
      } else if (!nameRegex.test(valueName)) {
        (this.errors)['name'] = 'Le nom doit être au moins 2 caractères alphabétiques.';
      }
    }

    if (typeof valueRace === "string") {
      if ((<string>valueRace).length == 0) {
        (this.errors)['race'] = 'La race est obligatoire.';
      } else if (!raceRegex.test(<string>valueRace)) {
        (this.errors)['race'] = 'La race doit être au moins 2 caractères alphabétiques.';
      }
    }

    if (typeof valueGender === "string") {
    if (!<string>valueGender) {
      this.errors['gender'] = 'Veuillez sélectionner le sexe';
    }
    }

    if (valueBirthday) {
     /* const formattedBirthday = valueBirthday.toISOString().slice(0, 10);
      if (!birthdayRegex.test(formattedBirthday)) {
        this.errors['birthday'] = 'Veuillez entrer une date valide au format YYYY-MM-DD.';
      }*/
      console.log('birthday:', valueBirthday);
    }

    if (valueWeight && !numberRegex.test(valueWeight.toString())) {
      this.errors['weight'] = 'Le poids doit être un nombre positif.';
    }

    if (valueHeight && !numberRegex.test(valueHeight.toString())) {
      this.errors['height'] = 'La taille doit être un nombre positif.';
    }

    if (valueHealthCondition &&!conditionRegex.test(valueHealthCondition)) {
      this.errors['healthCondition'] = 'La condition de santé est obligatoire.';
    }

    /*if (valueLastVisit) {
      const formattedBirthday = valueLastVisit.toISOString().slice(0, 10);
      if (!birthdayRegex.test(formattedBirthday)) {
        this.errors['birthday'] = 'Veuillez entrer une date valide au format YYYY-MM-DD.';
      }
    }*/

    if (valueNotes && valueNotes.length > maxNotesLength) {
      this.errors['notes'] = `Les notes ne peuvent pas dépasser ${maxNotesLength} charactères.`;
    }

    return { isValid: Object.keys(this.errors).length === 0, errors: this.errors };
  }

  //  Method to add an animal to the owner
  onSubmit() {
    const validationResult = this.validateAnimal(this.selectedAnimal as Animal);

    let  ownerIdsSet = new Set<number>();
    if (this.ownerId){
      ownerIdsSet.add(this.ownerId);
    }

    // Gather appointment data from the form
    const animalData = {

      ownerIds: Array.from(ownerIdsSet),
      name: this.checkoutForm.value['name'],
      race: this.checkoutForm.value['race'],
      gender: this.checkoutForm.value['gender'],
      birthday: this.checkoutForm.value['birthday'] ? new Date(this.checkoutForm.value['birthday'].slice(0, 10)) : null,
      weight: this.checkoutForm.value['weight'],
      height: this.checkoutForm.value['height'],
      healthCondition: this.checkoutForm.value['healthCondition'],
      lastVisit: this.checkoutForm.value['lastVisit'] ? new Date(this.checkoutForm.value['lastVisit'].slice(0, 10)) : null,
      notes: this.checkoutForm.value['notes'],
      picture: this.checkoutForm.value['picture'],
    };

    console.log('animalData:', animalData);

    /*
    console.log('ownerId: ' + animalData.ownerIds);
    console.log('Type of ownerId: ' + typeof(animalData.ownerIds));
    console.log("Animal name:" + animalData.name);
    console.log('Type of name: ' + typeof(animalData.name));
    console.log("Animal race:" + animalData.race);
    console.log('Type of race:'+ typeof(animalData.race));
    console.log("Animal gender:" + animalData.gender);
    console.log('Type of gender:'+ typeof(animalData.gender));
    console.log("Animal birthday:" + animalData.birthday);
    console.log('Type of birthday:'+ typeof(animalData.birthday));
    console.log("Animal weight:" + animalData.weight);
    console.log('Type of weight:'+ typeof(animalData.weight));
    console.log("Animal height:" + animalData.height);
    console.log('Type of height:'+ typeof(animalData.height));
    console.log("Animal healthCondition:" + animalData.healthCondition);
    console.log('Type of healthCondition:'+ typeof(animalData.healthCondition));
    console.log("Animal lastVisit:" + animalData.lastVisit);
    console.log('Type of lastVisit:'+ typeof(animalData.lastVisit));
    console.log("Animal notes:" + animalData.notes);
    console.log('Type of notes:'+ typeof(animalData.notes));
    console.log("Animal picture:" + animalData.picture);
    console.log('Type of picture:'+ typeof(animalData.picture));
    */

    console.log('animalData (pre-send):', animalData);

    this.http.post('http://localhost:8080/api/owners/addAnimal', animalData)
      .subscribe(

        response => {
          // Handle successful appointment creation
          console.log('Animal created successfully:', response);
          alert('Animal ajouté avec succès!');
          this.checkoutForm.reset();
        },
        error => {
          // Handle errors during appointment creation
          console.error('Error creating animal:', animalData, error);
          alert('Erreur lors de l\'ajout de l\'animal. Veuillez réessayer.');
        }
      );
  }

  onSubmitAppointment() {

    // Gather appointment data from the form
    const appointmentData = {
      animalId: this.checkoutForm.value['concernedAnimal'],
      appointmentDateTime: this.checkoutForm.value['appointmentDateTime'],
      appointmentNotes: this.checkoutForm.value['appointmentNotes'],
      appointmentType: this.checkoutForm.value['appointmentType'],
      appointmentLocation: this.checkoutForm.value['appointmentLocation'],
      emailOwner: this.currentUserEmail
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/owners/bookAppointment', appointmentData, { headers })
      .subscribe(

        response => {
          // Handle successful appointment creation
          console.log('Appointment created successfully:', response);
          alert('Rendez-vous enregistré avec succès!');
          this.checkoutForm.reset();
        },
        error => {
          // Handle errors during appointment creation
          console.error('Error creating appointment:', appointmentData, error);
          alert('Erreur lors de l\'enregistrement de rendez-vous. Veuillez réessayer.');
        }
      );
  }

  deleteAppointment(appointmentId: number) {
    console.log('Deleting appointment with id:'+ appointmentId);
    console.log(`http://localhost:8080/api/owners/cancelAppointment/${appointmentId}`);
    this.http.delete(`http://localhost:8080/api/owners/cancelAppointment/${appointmentId}`)
      .subscribe(

        response => {
          // Handle successful appointment deletion
          // Remove the appointment from the tempAppointments array
          this.tempAppointments = this.tempAppointments.filter(a => a.id !== appointmentId);
          console.log('Appointment deleted successfully:', response);
          alert('Rendez-vous supprimé avec succès!');

      }, error => {
        // Handle the error
        console.error('Error deleting appointment:', error);
        alert('Erreur lors de la suppression du rendez-vous. Veuillez réessayer.');
      });
  }

}
