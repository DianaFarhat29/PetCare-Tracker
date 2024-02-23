import {Component, Injectable, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import DayGridPlugin from '@fullcalendar/daygrid';
import { CommonModule } from '@angular/common';
import frLocale from '@fullcalendar/core/locales/fr';
import {HttpClient} from "@angular/common/http";
import { Animal } from '../animal';
import {Observable} from "rxjs";
import {AnimalService} from "../services/animal-service";

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
  ],
  templateUrl: './tableau-de-bord.component.html',
  styleUrl: './tableau-de-bord.component.css',
})

@Injectable({
  providedIn: 'root'
})

export class TableauDeBordComponent implements OnInit{
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [DayGridPlugin],
    locale: frLocale,
    height: 'auto',
    fixedWeekCount:false,
  };

  animals: Animal[] | undefined;

  constructor(private animalService: AnimalService, private http: HttpClient) {}

  ngOnInit() {
    const userId = 1; // Pour l'instant en dur
    const url = 'http://localhost:8080/api/user/' + userId;
    this.animalService.findAll(url).subscribe(data => {
      this.animals = data;
    });
  }

}
