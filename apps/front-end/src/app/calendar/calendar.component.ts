import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import { TeacherService } from '@workshop/core-data';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarPlugins=[dayGridPlugin];
  CalendarEvents:any[]=[];

  constructor(private teacherService : TeacherService) { }

  ngOnInit() {
    this.teacherService.getSoutenance().subscribe(data=>{
      this.CalendarEvents=data;
      console.log(this.CalendarEvents);
    })
  }

}
