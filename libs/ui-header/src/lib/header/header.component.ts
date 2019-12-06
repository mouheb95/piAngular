import { Component, OnInit } from '@angular/core';
import { StudentService, AuthenticationService, UserService, User } from '@workshop/core-data';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'workshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/student', icon: 'face', title: 'Student'},
    { path: '/pfefile', icon: 'work', title: 'Pfefile'},
  ] 

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
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
ngOnInit() {
  console.log(this.currentUser);
  /*  this.studentService.findStudent(1).subscribe(res => {
     console.log(res)
   }) */
 }

 logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');

  this.router.navigate(['/login']);
}

}
