import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule }from '@fullcalendar/angular';


import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    CalendarRoutingModule
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
