import {Component, Injectable, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Animal} from "../animal";
import {AnimalService} from "../services/animal-service";
import {HttpClient} from "@angular/common/http";
import { AnimalModel } from '../animal-model';
import {FormsModule, FormBuilder, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-mes-animaux',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormBuilder,
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
  private formBuilder: any;


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
    console.log('Birthday:', birthday, typeof birthday);
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

    console.log('name:', animal.name);
    console.log('nameRegex test result:', nameRegex.test(animal.name));

    console.log('race:', animal.race);
    console.log('raceRegex test result:', raceRegex.test(animal.race));

    if (!conditionRegex.test(animal.healthCondition)) {
      this.errors['healthCondition'] = 'La condition de santé est obligatoire.';
    }

    if (animal.name.length == 0) {
      (this.errors)['name'] = 'Le nom est obligatoire.';
    } else if (!nameRegex.test(animal.name)) {
      (this.errors)['name'] = 'Le nom doit être au moins 2 caractères alphabétiques.';
    }

    if (animal.name.length == 0) {
      (this.errors)['race'] = 'La race est obligatoire.';
    } else if (!raceRegex.test(animal.race)) {
      (this.errors)['race'] = 'La race doit être au moins 2 caractères alphabétiques.';
    }

    if (!animal.gender) {
      this.errors['gender'] = 'Veuillez sélectionner le sexe';
    }

    if (animal.birthday) {
      const formattedBirthday = animal.birthday.toISOString().slice(0, 10);
      if (!birthdayRegex.test(formattedBirthday)) {
        this.errors['birthday'] = 'Veuillez entrer une date valide au format YYYY-MM-DD.';
      }
    }

    if (animal.weight && !numberRegex.test(animal.weight.toString())) {
      this.errors['weight'] = 'Le poids doit être un nombre positif.';
    }

    if (animal.height && !numberRegex.test(animal.height.toString())) {
      this.errors['height'] = 'La taille doit être un nombre positif.';
    }

    if (animal.notes && animal.notes.length > maxNotesLength) {
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
      }, error => {
        console.error('Error saving animal:', error);
        alert('Erreur lors de l\'ajout de l\'animal. Veuillez réessayer.');
      });
    } else {
      let errorMessage = 'Données de l\'animal invalides. Veuillez corriger les erreurs suivantes:\n';
      for (const field in validationResult.errors) {
      errorMessage += `- ${field}: ${validationResult.errors[field]}\n`;
    }
    alert(errorMessage);
    }
}



}
