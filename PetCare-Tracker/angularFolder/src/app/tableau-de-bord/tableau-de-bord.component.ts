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
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {Appointment} from "../appointment";
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from "../services/auth-service";

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    MdbCarouselModule,
    RouterLink,
    RouterLinkActive,
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
  public tempAppointments: Appointment[] = [];
  selectedAppointment: Appointment | null = null;
  showAppointmentDetails: boolean = false;

  constructor(private animalService: AnimalService, private authService: AuthService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('role') !== 'Owner') {
      this.router.navigate(['/']);
    }

    const userId = (Number)(localStorage.getItem('userId'));
    const url = 'http://localhost:8080/api/user/' + userId;
    this.animalService.findAll(url).subscribe(data => {
      this.animals = data;
    });

    this.http.get<Appointment[]>(`http://localhost:8080/api/owners/${userId}/appointments`)
      .subscribe(appointments => {
        this.tempAppointments = appointments;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onClickVoirPlus(animal: Animal) {
    this.router.navigate(['/mes-animaux'], { queryParams: { animalId: animal.id } });
  }

  hasAnyAppointments(): boolean {
    return this.tempAppointments.some(appointment => appointment.animal);
  }

  get appointments(): Appointment[] | undefined {
    return this.tempAppointments;
  }

  getAppointmentsForAnimal(animalId: number): Appointment[] {
    return this.tempAppointments.filter(appointment => appointment.animal.id === animalId);
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



}
