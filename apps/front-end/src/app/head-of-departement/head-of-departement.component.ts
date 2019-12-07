import { Component, OnInit } from '@angular/core';
import { PfefileService } from '@workshop/core-data';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-head-of-departement',
  templateUrl: './head-of-departement.component.html',
  styleUrls: ['./head-of-departement.component.scss']
})
export class HeadOfDepartementComponent implements OnInit {

  constructor( private pfefileService : PfefileService) { }

  list_pfefile = [] ;
  list_teacher = [] ;
  showpopup1= false;
  showpopup2= false;
  showpopup3= false;
  teacher ;
  Currentpfefile;
  pfefile;
  btnaffecterV= false;
  btnaffecterF= false;
  btnaffecterR= false;


  ngOnInit() {
    this.getPfeFileWithoutValidator();
    
    
  }

  getPfeFileWithoutValidator(){
    this.pfefileService.pfeFilesWithoutValidator().subscribe(pfeFile => {
      console.log(pfeFile);
      this.list_pfefile = pfeFile;
      this.btnaffecterV= true;
      this.btnaffecterF= false;
      this.btnaffecterR= false;

   })
  }

  getPfeFileWithoutReporter(){
    this.pfefileService.pfeFilesWithoutReporter().subscribe(pfeFile => {
      console.log(pfeFile);
      this.list_pfefile = pfeFile;
      this.btnaffecterR= true;
      this.btnaffecterF= false;
      this.btnaffecterV= false;

   })
  }

  getPfeFileWithoutFramer(){
    this.pfefileService.pfeFilesWithoutFramer().subscribe(pfeFile => {
      console.log(pfeFile);
      this.list_pfefile = pfeFile;
      this.btnaffecterF= true;
      this.btnaffecterV= false;
      this.btnaffecterR= false;

   })
  }
 

  getAllTeacher(){
    this.pfefileService.allTeacher().subscribe(teacher => {
      console.log(teacher);
      this.list_teacher = teacher;

   })
  }

  /**************************affecter validator **************************************** */

  affecterPfe1(a)
  {
    
    this.showpopup1 = true;
    this.Currentpfefile = a;
    this.getTeacherByCategory(this.Currentpfefile.category.Category_ID);
  }
  onChangeObj(newobj){
    this.teacher = newobj;
    console.log(newobj)
  }

  affectValidateur(teacher,pfefile){
    

    const obj={
      "validatorId":teacher.id,
      "fileId":pfefile.id
    }
    this.pfefileService.affectationValidateur(obj).subscribe(teacher => {
      console.log(teacher);
      
   })
   this.showpopup1 = !this.showpopup1;
  }
  hideaffectation(){
    this.showpopup1 = !this.showpopup1;
  }

  getTeacherByCategory(a){
    this.pfefileService.teacherByCategory(a).subscribe(teacher => {
      console.log(teacher);
      this.list_teacher = teacher;

   })
  }

/**************************affecter Framer **************************************** */

  affectFramer(teacher,pfefile){
    

    const obj={
      "framerId":teacher.id,
      "fileId":pfefile.id
    }
    this.pfefileService.affectationFramer(obj).subscribe(teacher => {
      console.log(teacher);
      
   })
   this.showpopup2 = !this.showpopup2;
  }
  hideaffectation1(){
    this.showpopup2 = !this.showpopup2;
  }
  affecterPfe2(a)
  {
    
    this.showpopup2 = true;
    this.Currentpfefile = a;
    this.getTeacherByCategory(this.Currentpfefile.category.Category_ID);
  }

  /**************************affecter reporter **************************************** */
  affectReporter(teacher,pfefile){
    

    const obj={
      "reporterId":teacher.id,
      "fileId":pfefile.id
    }
    this.pfefileService.affectationReporter(obj).subscribe(teacher => {
      console.log(teacher);
      
   })
   this.showpopup3 = !this.showpopup3;
  }
  hideaffectation3(){
    this.showpopup3 = !this.showpopup3;
  }
  affecterPfe3(a)
  {
    
    this.showpopup3 = true;
    this.Currentpfefile = a;
    this.getTeacherByCategory(this.Currentpfefile.category.Category_ID);
  }

/**************************************pfe files without note framer************************ */

getPfeFileWithoutNoteF(){
  this.pfefileService.pfeFilesWithoutNoteF().subscribe(pfeFile => {
    console.log(pfeFile);
    this.list_pfefile = pfeFile;
    this.btnaffecterV= false;
    this.btnaffecterF= false;
    this.btnaffecterR= false;

 })
}

/**************************************pfe files without note reporter************************ */

getPfeFileWithoutNoteR(){
  this.pfefileService.pfeFilesWithoutNoteR().subscribe(pfeFile => {
    console.log(pfeFile);
    this.list_pfefile = pfeFile;
    this.btnaffecterV= false;
    this.btnaffecterF= false;
    this.btnaffecterR= false;

 })
}


}
