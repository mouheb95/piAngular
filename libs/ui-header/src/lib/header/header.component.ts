import { Component, OnInit } from '@angular/core';
import { StudentService, AuthenticationService, UserService, User } from '@workshop/core-data';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SafeHtml} from '@angular/platform-browser'

@Component({
  selector: 'workshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  msg:string
  data: SafeHtml;

   connection = new WebSocket('ws://127.0.0.1:1337');
    myName=false;
  currentUser: User;
  currentUserSubscription: Subscription;
  variable = "Profile";

  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/student', icon: 'face', title: this.variable},
    { path: '/pfefile', icon: 'work', title: 'Pfefile'},
  ]

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router,
) {

  var myscope = this;

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });

    if( JSON.parse( localStorage.getItem('currentUser')) === null ) {
        console.log("GO LOGIN FIRST FUCKER");
        this.router.navigate(['/login']);
    }


}
ngOnInit() {
 }






  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    this.router.navigate(['/login']);
  }
}
