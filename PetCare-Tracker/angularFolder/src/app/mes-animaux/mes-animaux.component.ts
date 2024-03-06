import {Component, Injectable, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Animal} from "../animal";
import {AnimalService} from "../services/animal-service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AnimalModel } from '../animal-model';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {OwnerService} from "../services/owner-service";
import {Appointment} from "../appointment";
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {OwnerModel} from "../owner-model";


@Component({
  selector: 'app-mes-animaux',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
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
  public tempAnimals: Appointment[] = [];
  submitted = false;
  selectedAppointment: Appointment | null = null;
  showAppointmentDetails: boolean = false;

  constructor(private animalService: AnimalService, private ownerService: OwnerService, private http: HttpClient, private formBuilder: FormBuilder,) {}

  ngOnInit() {
    const userId = 2; // Pour l'instant en dur
    const url = 'http://localhost:8080/api/user/' + userId;
    this.animalService.findAll(url).subscribe(data => {
      this.animals = data;

      if (data.length > 0) {
        const ownerId = userId;  // Get the owner ID
        this.ownerService.getOwnerById(ownerId).subscribe(owner => {
          this.ownerId = ownerId;

        });
      }

      this.http.get<Appointment[]>(`http://localhost:8080/api/owners/${userId}/appointments`)
        .subscribe(appointments => {
          this.tempAppointments = appointments;
        });

    });
  }

  showAnimalDetails(animal: Animal) {
    console.log('showAnimalDetails - animal:', animal); // Log the complete animal object
    console.log('showAnimalDetails - animal.id:', animal.id); // Log the animal's ID specifically
    console.log('showAnimalDetails - animal.id:', animal.birthday); // Log the animal's birthday specifically

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

  toggleAppointmentDetails(appointment: Appointment) {
    if (this.showAppointmentDetails && this.selectedAppointment === appointment) {
      this.selectedAppointment = null;
      this.showAppointmentDetails = false;
    } else {
      this.selectedAppointment = appointment;
      this.showAppointmentDetails = true;
    }
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
    this.checkoutForm.enable();
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
    name: [{value: '', disabled: true}, Validators.required],
    race: [{value: '', disabled: true}, Validators.required],
    gender: [{value: '', disabled: true}, Validators.required],
    birthday: [{value: '', disabled: true}, Validators.required],
    weight: [{value: '', disabled: true}, Validators.required],
    height: [{value: '', disabled: true}, Validators.required],
    healthCondition: [{value: '', disabled: true}, Validators.required],
    lastVisit: [{value: '', disabled: true}, Validators.required],
    notes: [{value: '', disabled: true}, Validators.required],
    picture: [{value: '', disabled: true}, Validators.required],

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

    // Gather appointment data from the form
    const animalData = {

      owner: this.ownerId,
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

    console.log('owner: ' + animalData.owner);
    console.log('Type of owner: ' + typeof(animalData.owner));

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

  onEditButtonClick() {
    this.checkoutForm.enable();
  }

  editAnimal(animal: Animal): void {
    console.log("Animal ID : " + animal.id);
    // Check if id is defined
    if (!animal.id) {
      console.error("L'identifiant de l'animal n'est pas défini.");
      return;
    }

    this.selectedAnimal  = {
      id: animal.id,
      owner: animal.owner,
      name: this.checkoutForm.value['name']? this.checkoutForm.value['name'] : animal.name,
      race: this.checkoutForm.value['race']? this.checkoutForm.value['race'] : animal.race,
      gender: this.checkoutForm.value['gender']? this.checkoutForm.value['gender'] : animal.gender,
      birthday: this.checkoutForm.value['birthday'] ? new Date(this.checkoutForm.value['birthday'].slice(0, 10)) : animal.birthday,
      weight: (Number) (this.checkoutForm.value['weight']? this.checkoutForm.value['weight'] : animal.weight),
      height: (Number) (this.checkoutForm.value['height']? this.checkoutForm.value['height'] : animal.height),
      healthCondition: this.checkoutForm.value['healthCondition']? this.checkoutForm.value['healthCondition'] : animal.healthCondition,
      lastVisit: this.checkoutForm.value['lastVisit'] ? new Date(this.checkoutForm.value['lastVisit'].slice(0, 10)) : animal.lastVisit,
      notes: this.checkoutForm.value['notes']? this.checkoutForm.value['notes'] : animal.notes,
      picture: this.checkoutForm.value['picture']? this.checkoutForm.value['picture'] : animal.picture,
    }

    // Send request to update the animal
    this.animalService.updateAnimal(this.selectedAnimal)
      .subscribe({
        next: response => {
          console.log("Modifications enregistrées avec succès :", response);
          this.submitted = true;
          // Réinitialiser la sélection de l'animal après l'enregistrement
          this.selectedAnimal = undefined;
        },
        error: error => {
          console.log("Erreur lors de l'enregistrement des modifications :", error);
          // Gérer l'erreur ici
        }
      });
  }

  deleteAnimal(animalId: number | undefined) {

    if (typeof animalId === 'number') {
      console.log('Deleting animal with id:'+ animalId);

      this.http.delete(`http://localhost:8080/api/owners/deleteAnimal/${animalId}`)
        .subscribe(

          response => {
            // Handle successful appointment deletion
            // Remove the appointment from the tempAppointments array
            this.tempAnimals = this.tempAnimals.filter(a => a.id !== animalId);
            console.log('Animal deleted successfully:', response);
            alert('Animal supprimé avec succès!');

          }, error => {
            // Handle the error
            console.error('Error deleting animal:', error);
            alert('Erreur lors de la suppression de l\'animal. Veuillez réessayer.');
          });
    } else {

      console.error('Error deleting animal: Animal ID is undefined.');
    }
  }

  updateAnimal(animal: Animal): void {

    console.log("Animal ID : " + animal.id);
    console.log("Animal owner : " + animal.owner);

    if (!animal.id) {
      console.error("Animal ID not defined.");
      return;
    }
    this.selectedAnimal  = animal;

    this.animalService.updateAnimal(this.selectedAnimal)
      .subscribe({
        next: (response: any) => {
          console.log("Animal successfully updated :", response);
          this.submitted = true;

        },
        error: (error: any) => {
          console.log("Error while updating animal :", error);
          // Gérer l'erreur ici
        }
      });
  }


  onSubmitAppointment() {

    // Gather appointment data from the form
    const appointmentData = {
      animalId: this.checkoutForm.value['concernedAnimal'],
      appointmentDateTime: this.checkoutForm.value['appointmentDateTime'],
      appointmentNotes: this.checkoutForm.value['appointmentNotes'],
      appointmentType: this.checkoutForm.value['appointmentType'],
      appointmentLocation: this.checkoutForm.value['appointmentLocation'],
      ownerId: this.ownerId,
    };

    console.log("Appointment ownerId: "+ appointmentData.ownerId);

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
