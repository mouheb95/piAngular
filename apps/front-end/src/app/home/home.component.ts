import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService, User } from '@workshop/core-data';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(
        private authenticationService: AuthenticationService,
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
       
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');

        this.router.navigate(['/login']);
    }

}