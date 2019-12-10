import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Output() event = new EventEmitter();
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  url : string = "http://localhost:18080/piPfe-web/Pfe/profile";
  nbStudent;
  nbTeacher;
  nbHeade;
  nbInetrn;
  stat:Boolean=false;

  tab= [];

  ngOnInit() {
    this.http.get(this.url+"/countStudent").subscribe(res => {
      this.nbStudent= res;
    });
    this.http.get(this.url+"/countTeacher").subscribe(res => {
      this.nbTeacher= res;
    });
    this.http.get(this.url+"/countHead").subscribe(res => {
      this.nbHeade= res;
    });
    this.http.get(this.url+"/countIntern").subscribe(res => {
      this.nbInetrn= res;
    });
  }

  pieChart() {
    this.tab= [{
      name: 'Students',
      y: this.nbStudent ,
      sliced: true,
      selected: true
    }, {
      name: 'Teachers',
      y: this.nbTeacher,
    }, {
      name: 'Directors',
      y: this.nbHeade,
    }, {
      name: 'HeadofDepartement',
      y: this.nbInetrn,
    },];
    this.event.emit(this.tab);
  }

}
