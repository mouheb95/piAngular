import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '@workshop/core-data';


@Component({
  selector: 'workshop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUser;
  
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.reset();
  }

  signUp(user) {
    this.studentService.signUp(user).subscribe( res => {
      console.log(res);
    })
  }

  reset() {
    const emptyUser = {
      email: ""
    }
    this.newUser = emptyUser;
  }
}
