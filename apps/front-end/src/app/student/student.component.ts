import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '@workshop/core-data';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor( private studentService : StudentService) { }
  currentStudent; 
  show_profile = true;
/* = {
    "name": "student",
    "lastname": null,
    "birthdate": null,
    "password": "3de16f025f464a64322db0604a5f3921",
    "email": "mouheb.bzri@gmail.com",
    "token": "4234b4f9011bec64",
    "lastConnect": "2019-11-06",
    "connected": true,
    "active": false,
    "notifiableEntity": null,
    "intershipagreement": null,
    "profile": 1
} */
  ngOnInit() {
    console.log("hello")
      this.resetStudent();
      
      this.studentService.findStudent(4).subscribe(res => {
        this.currentStudent = res
    }) 
    
  }


  save(student: Student){
      this.studentService.updateStudent(student).subscribe(res => {
      console.log(res)
    })  
  }

  resetStudent(){
    const emptyStudent = {
      "name": "",
      "lastname": "",
      "birthdate": "",
      "password": "",
      "email": "",
      "token": "",
      "lastConnect": "",
      "connected": "",
      "active": "",
      "notifiableEntity": "",
      "intershipagreement": "",
      "profile": null
  }
  this.currentStudent = emptyStudent;
  }

}
