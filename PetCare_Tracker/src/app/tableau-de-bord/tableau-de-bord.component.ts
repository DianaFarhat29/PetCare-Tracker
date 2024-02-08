import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { CalendarOptions } from '@fullcalendar/core';
import DayGridPlugin from '@fullcalendar/daygrid';
import { CommonModule } from '@angular/common';
import frLocale from '@fullcalendar/core/locales/fr';


@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  templateUrl: './tableau-de-bord.component.html',
  styleUrl: './tableau-de-bord.component.css',
})
export class TableauDeBordComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [DayGridPlugin],
    locale: frLocale,
    height: 'auto',
    fixedWeekCount:false,
  };
}

