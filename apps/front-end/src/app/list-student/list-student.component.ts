import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@workshop/core-data';
import { student } from 'libs/core-data/src/lib/internshipDirector/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService : StudentsService) { }

  students = [] ;
  popap= false;
  alert= false;
  al= false;
  lastname: string;



  list:student[]=[];
  getstudents(){
    this.studentService.findall().subscribe(students => {
      console.log(students);
      this.students = students;

  })
}

p: any;

reset() {
  const emptyP = {
    id :'',
  }
  this.p =emptyP;
}

getstudentByemail(email){
  this.popap = true;
  this.studentService.findStudentByEmail(email).subscribe(params => {
    this.p = params;
    console.log(params);
  })
}


pfeFileStudent(ok){
  this.popap = true;
  this.studentService.pfeFileOfStudent(ok).subscribe(params => {
    this.p = params;
    console.log(params);
  })
}

  returnPage() {
  this.popap= false;
  
  }

  returnPage2() {
    this.al= false;
    this.alert=false;
    
    }


  getstudentsWithoutPfefile(){
    this.alert=true;
    this.studentService.studentWithOutPfefile().subscribe(students => {
      console.log(students);
      this.students = students;

  })
}

getStudentRefusePFE(){
  this.studentService.studentRejectPfe().subscribe(students => {
    console.log(students);
    this.students = students;

})
}

getstudentsWithPfefile(){
  this.studentService.studentWithPfefile().subscribe(students => {
    console.log(students);
    this.students = students;

})
}

sendRappelMail(){
  this.alert=false;
  this.al=true;
  this.studentService.sendMailRappel().subscribe(students => {
    console.log(students);
    this.students = students;

})
}

search() {
  this.students = this.students.filter(res=>{
    return res.lastname.toLocalLowerCase().match(this.lastname.toLocaleLowerCase());
  })
}

  ngOnInit() {
    this.getstudents();
    this.reset();
    this.getstudentsWithoutPfefile();
  }

}
