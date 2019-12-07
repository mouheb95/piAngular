import { Component, OnInit } from '@angular/core';
import { StudentsService, PfeFileCancellingService } from '@workshop/core-data';

@Component({
  selector: 'workshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/student', icon: 'face', title: 'Student'},
    { path: '/pfefile', icon: 'work', title: 'Pfefile'},
    { path: '/dashboard', icon: 'work', title: 'Dashboard'},
    { path: '/headofdepartement', icon: 'work', title: 'Head Of Departement'}
    ]
  
  constructor( private studentService : StudentsService, private pfeFileCancellingService : PfeFileCancellingService) { }

  listPfeFileCancelling = [] ;

  getPfeFileCancelling(){
    this.pfeFileCancellingService.findallallPfeFileCancelling().subscribe(pfeFileCancelling => {
      console.log(pfeFileCancelling);
      this.listPfeFileCancelling = pfeFileCancelling;

   })
  }

  calculerNombres() {
    console.log("eoooo : "+this.listPfeFileCancelling.length)
    return this.listPfeFileCancelling.length;
  }

  refusePfeCancelling(p){
    this.pfeFileCancellingService.refusePfeFileCancellingRequest(p).subscribe(pfeFileCancelling => {
      console.log(pfeFileCancelling);
      this.listPfeFileCancelling = pfeFileCancelling;

   })
  }

  acceptPfeCancelling(p){
    this.pfeFileCancellingService.acceptPfeFileCancellingRequest(p).subscribe(pfeFileCancelling => {
      console.log(pfeFileCancelling);
      this.listPfeFileCancelling = pfeFileCancelling;

   })
  }

  ngOnInit() {
    this.getPfeFileCancelling();

  }

}

