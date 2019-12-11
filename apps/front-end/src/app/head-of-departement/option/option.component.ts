import { Component, OnInit } from '@angular/core';
import { OptionService, UserService, AuthenticationService, User } from '@workshop/core-data';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  

  currentUserSubscription: Subscription;

  currentUser= JSON.parse(localStorage.getItem('currentUser')).id;

  currentOption;
  options;
  show_add_option = false;
  showOK= false;
  emptyOption;


  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private router: Router,
      private optionService: OptionService
  ) {
console.log("constructor")
  }

  ngOnInit() {
    this.resOption()
    this.optionService.getAllOptions(this.currentUser).subscribe( res =>{
      this.options = res ;
    })
  }

  


  resOption(){
    this.emptyOption = {
      "id": null,
      "name": "",
      "score": "",
      "departement": null
    } ;
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');

      this.router.navigate(['/login']);
  }

  saveChanges(option){

    if(option.id === null){
      this.createOption(option);
    } else {
      this.updateOption(this.currentOption);
    }
    this.showOK=true;
    this.resOption();
     
  }


createOption(option){
    this.optionService.addOption(option,this.currentUser).subscribe( res => {

    })
  }

  updateOption(option){
    this.optionService.updateOption(option,this.currentUser).subscribe( res => {
      this.currentOption = res;
        })
        this.show_add_option=true;
  }

  deleteOption(id){
    console.log(id)
    this.optionService.deleteOption(id).subscribe( res => {
      console.log("deleted");
    })
    this.optionService.getAllOptions(this.currentUser).subscribe( res =>{
      this.options = res ;
    })
    
  }


showAddOption(option){
  this.currentOption = option
    this.show_add_option = true;
    
}

returnPage()
{
   this.show_add_option=false;;
   this.showOK=false;
  this.optionService.getAllOptions(this.currentUser).subscribe( res =>{

    console.log(res)
    this.options = res ;
  })
  
   
  
}

  

}
