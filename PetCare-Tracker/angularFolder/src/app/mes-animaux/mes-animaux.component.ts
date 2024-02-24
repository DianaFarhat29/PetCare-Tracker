import {Component, Injectable, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Animal} from "../animal";
import {AnimalService} from "../services/animal-service";
import {HttpClient} from "@angular/common/http";
import { AnimalModel } from '../animal-model';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";


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



  constructor(private animalService: AnimalService, private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    const userId = 1; // Pour l'instant en dur
    const url = 'http://localhost:8080/api/user/' + userId;
    this.animalService.findAll(url).subscribe(data => {
      this.animals = data;
    });
  }

  showAnimalDetails(animal: Animal) {
    this.selectedAnimal = animal;
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
        name: "ND",
        race: "ND",
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
    name: "ND",
    race: "ND",
    gender: "",
    birthday: new Date(1900, 0, 1),
    weight: 0,
    height: 0,
    healthCondition: "",
    lastVisit: new Date(0),
    notes: "",
    picture: "",
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
    console.log('raceRegex test result:', raceRegex.test(animal.race));

    console.log('gender:', this.checkoutForm.value.gender);
    console.log('raceRegex test result:', raceRegex.test(animal.gender));

    if (!conditionRegex.test(animal.healthCondition)) {
      this.errors['healthCondition'] = 'La condition de santé est obligatoire.';
    }

    if (typeof valueName === "string") {
      if (valueName.length == 0) {
        (this.errors)['name'] = 'Le nom est obligatoire.';
      } else if (!nameRegex.test(valueName)) {
        (this.errors)['name'] = 'Le nom doit être au moins 2 caractères alphabétiques.';
      }
    }

    if (typeof valueRace === "string") {
      if (valueRace.length == 0) {
        (this.errors)['race'] = 'La race est obligatoire.';
      } else if (!raceRegex.test(valueRace)) {
        (this.errors)['race'] = 'La race doit être au moins 2 caractères alphabétiques.';
      }
    }

    if (typeof valueGender === "string") {
    if (!valueGender) {
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

  // Hypothetical function to interact with backend - replace with actual logic
  onSubmit() {
    const validationResult = this.validateAnimal(this.selectedAnimal as Animal);

    if (this.validateAnimal(this.selectedAnimal as Animal) && this.selectedOwnerId) {
      this.animalService.save(this.selectedAnimal as Animal, this.selectedOwnerId).subscribe(() => {
        alert('Animal ajouté avec succès!');
        this.clearInputsAndEnable();
        this.checkoutForm.reset();
      }, error => {
        console.error('Error saving animal:', error);
        alert('Erreur lors de l\'ajout de l\'animal. Veuillez réessayer.');
      });
    } else {
      console.warn('Your order has been submitted', this.checkoutForm.value);
      let errorMessage = 'Données de l\'animal invalides. Veuillez corriger les erreurs suivantes:\n';
      for (const field in validationResult.errors) {
      errorMessage += `- ${field}: ${validationResult.errors[field]}\n`;
    }
    alert(errorMessage);
    }
}



}
