import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '@workshop/core-data';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUserSubscription;
  currentUser;

  constructor(
    private authenticationService: AuthenticationService,

    private router: Router,
  ) {

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    if( JSON.parse( localStorage.getItem('currentUser')) === null ) {
      console.log("GO LOGIN FIRST FUCKER");
      this.router.navigate(['/login']);
    }
  }
}
