import { Component, OnInit } from '@angular/core';
import { StudentsService, PfeFileCancellingService, AuthenticationService } from '@workshop/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'workshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDirector= false;
  currentUserSubscription;
  currentUser= JSON.parse(localStorage.getItem('currentUser')).id;
    show_menu_bar = false;

  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/InternshipDirector/student', icon: 'face', title: 'Student'},
    { path: '/InternshipDirector/pfefile', icon: 'work', title: 'Pfefile'},
    { path: '/InternshipDirector/dashboard', icon: 'work', title: 'Dashboard'},
    { path: '/InternshipDirector/reclamation', icon: 'work', title: 'Reclamation'},

    ]

    linksHeadOfDepartement = [
      { path: '/headofdepartement/option', icon: 'face', title: 'Option'},
      { path: '/headofdepartement/teacher', icon: 'face', title: 'Teacher'},
      { path: '/headofdepartement/category', icon: 'work', title: 'Category'},
      { path: '/headofdepartement/pfefile', icon: 'work', title: 'Pfe Files'}

      ]
  
  constructor( private authenticationService: AuthenticationService,
    
    private router: Router,
    private studentService : StudentsService, private pfeFileCancellingService : PfeFileCancellingService) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });

    console.log(JSON.parse( localStorage.getItem('currentUser')))

    if( JSON.parse( localStorage.getItem('currentUser')) === null ) {
        console.log("GO LOGIN FIRST FUCKER");
        this.router.navigate(['/login']);
    }
     }

     ngOnInit() {
      this.getPfeFileCancelling();
      this.getNotifRec();
    }

  listPfeFileCancelling = [] ;
  listNotif ;


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

  getNotifRec(){
    this.studentService.getNotif(this.currentUser.id).subscribe(rec => {
      console.log(rec);
      this.listNotif = rec;
   })
  }

  seen(notif){
    this.studentService.seen(notif).subscribe();
  
  }

  


logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');

  this.router.navigate(['/login']);
}

showMenuBar()
{
  this.show_menu_bar = ! this.show_menu_bar;
}

}