import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService, User, UserService } from '@workshop/core-data';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;


  currentOption;
  options;
  show_add_option = false;


    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private optionService: OptionService
    ) {

        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });

        if( JSON.parse( localStorage.getItem('currentUser')) === null ) {
            console.log("GO LOGIN FIRST");
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() {
      this.resOption();
      this.optionService.getAll().subscribe( res =>{
        this.options = res ;
      })
    }
    resOption(){
      this.currentOption = {
        "id": null,
        "name": "",
        "score": "",
        "departement": null
      } ;
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

    saveChanges(option){
      this.currentOption = option;
      if(option.id === null){
        this.createOption(this.currentOption);
      } else {
        this.updateOption(this.currentOption);
      }
    }


  createOption(option){
      this.optionService.createOption(option).subscribe( res => {

      })
    }

    updateOption(option){
      this.optionService.updateOption(option).subscribe( res => {
        this.currentOption = res;
      })
    }

    deleteOption(id){
      this.optionService.remove(id).subscribe( res => {
        console.log("deleted");
      })
    }


  showAddOption(any){
      this.show_add_option = true;
      this.currentOption = any;
  }
}
