import { Component, OnInit } from '@angular/core';
import { User, AuthenticationService, UserService, CategoryService } from '@workshop/core-data';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  currentUser= JSON.parse(localStorage.getItem('currentUser')).id;
    currentUserSubscription: Subscription;


current_category;
categorys;
show_give_note = false;


  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private router: Router,
      private categoryService: CategoryService
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
    this.resCategory();
    this.categoryService.allCategory().subscribe( res =>{
      this.categorys = res ;
      console.log(this.categorys)
    })
  }
  resCategory(){
    this.current_category = {
      "Category_ID": null,
      "name": "",
      "teacher": null,

    } ;
  }

  validate(category){
    console.log(category.Category_ID)
    this.categoryService.ValidateCategory(category.Category_ID).subscribe()
    this.categoryService.allCategory().subscribe( res =>{
      this.categorys = res ;
      console.log(this.categorys)
    })
  }

  showGiveNotePopUp(teacher){
   // this.currentTeacher = teacher;
    this.show_give_note = true;
  }

hideGiveNotePopUp(){
  this.show_give_note = false;
}

}
