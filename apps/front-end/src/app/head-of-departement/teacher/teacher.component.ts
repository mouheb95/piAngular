import { Component, OnInit } from '@angular/core';
import { User, AuthenticationService, UserService, CategoryService, TeacherService } from '@workshop/core-data';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  currentUser: User;
    currentUserSubscription: Subscription;


  currentTeacher;
  teachers;
  show_give_note = false;


    constructor(
        private authenticationService: AuthenticationService,
        private teacherService: TeacherService,
        private router: Router,
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
      this.resTeacher();
      this.teacherService.allTeacher().subscribe( res =>{
        this.teachers = res ;
      })
    }

    getAll(){
      this.teacherService.allTeacher().subscribe( res =>{
        this.teachers = res ;
      })
    }
    resTeacher(){
      this.teachers = {
        "id": null,
        "name": "",
        "lastname": "",
        "email": "",
        "region": "",
        "limitRole": "",
        "nn": null,
        "notefinal": null,
      } ;
    }



    addNoteTeacher(Teacher){
      console.log(Teacher)

      this.teacherService.addNoteTeacher(Teacher).subscribe( res =>{

        this.teachers = res ;
      })
      this.getAll();
    
    

      this.show_give_note = false;
    }

    showGiveNotePopUp(teacher){
      this.currentTeacher = teacher;
      this.show_give_note = true;
    }

  hideGiveNotePopUp(){
    this.show_give_note = false;
  }

}
