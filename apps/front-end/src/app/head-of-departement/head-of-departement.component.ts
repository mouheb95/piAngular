import { Component, OnInit } from '@angular/core';
import { PfefileService } from '@workshop/core-data';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-head-of-departement',
  templateUrl: './head-of-departement.component.html',
  styleUrls: ['./head-of-departement.component.scss']
})
export class HeadOfDepartementComponent implements OnInit {

  list_pfefile = [] ;
  list_teacher = [] ;
  list_pfefile_history = [];
  showpopup1= false;
  showpopup2= false;
  showpopup3= false;
  teacher ;
  Currentpfefile;
  pfefile;
  pfefileHistory;
  btnaffecterV= false;
  btnaffecterF= false;
  btnaffecterR= false;
  
  currentUser= JSON.parse(localStorage.getItem('currentUser')).id;


  constructor( private pfefileService : PfefileService) { }

  

  ngOnInit() {
    this.currentUser;
    this.getPfeFile();
    console.log("cvbjnk,lm",this.getPfeFile())
    
    
  }

  getPfeFileWithoutValidator(){
    this.pfefileService.pfeFilesWithoutValidator(this.currentUser).subscribe(pfeFile => {

      this.list_pfefile = pfeFile;
      this.btnaffecterV= true;
      this.btnaffecterF= false;
      this.btnaffecterR= false;

   })
  }

  getPfeFileWithoutReporter(){
    this.pfefileService.pfeFilesWithoutReporter(this.currentUser).subscribe(pfeFile => {
 
      this.list_pfefile = pfeFile;
      this.btnaffecterR= true;
      this.btnaffecterF= false;
      this.btnaffecterV= false;

   })
  }

  getPfeFileWithoutFramer(){
    this.pfefileService.pfeFilesWithoutFramer(this.currentUser).subscribe(pfeFile => {
 
      this.list_pfefile = pfeFile;
      this.btnaffecterF= true;
      this.btnaffecterV= false;
      this.btnaffecterR= false;

   })
  }
 

  getAllTeacher(){
    this.pfefileService.allTeacher().subscribe(teacher => {
  
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

  }

  affectValidateur(teacher,pfefile){
    
    this.getPfeFileWithoutValidator();

    const obj={
      "validatorId":teacher.id,
      "fileId":pfefile.id
    }
    this.pfefileService.affectationValidateur(obj).subscribe(teacher => {
      this.getPfeFileWithoutValidator();

      
   })
   this.showpopup1 = !this.showpopup1;
   this.getPfeFileWithoutValidator();
  }
  hideaffectation(){
    this.showpopup1 = !this.showpopup1;
  }

  getTeacherByCategory(a){
    this.pfefileService.teacherByCategory(a).subscribe(teacher => {
      
      this.list_teacher = teacher;

   })
  }

/**************************affecter Framer **************************************** */

  affectFramer(teacher,pfefile){
    this.getPfeFileWithoutFramer();

    const obj={
      "framerId":teacher.id,
      "fileId":pfefile.id
    }
    this.pfefileService.affectationFramer(obj).subscribe(teacher => {
      this.getPfeFileWithoutFramer();
      
   })
   this.showpopup2 = !this.showpopup2;
  }
  hideaffectation1(){
    this.getPfeFileWithoutFramer();
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
    
    this.getPfeFileWithoutReporter();
    const obj={
      "reporterId":teacher.id,
      "fileId":pfefile.id
    }
    this.pfefileService.affectationReporter(obj).subscribe(teacher => {
      console.log(teacher);
      this.getPfeFileWithoutReporter();
      
   })
   this.getPfeFileWithoutReporter();
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
 

  this.pfefileService.pfeFilesWithoutNoteF(this.currentUser).subscribe(pfeFile => {
    console.log(pfeFile);
    this.list_pfefile = pfeFile;
    this.btnaffecterV= false;
    this.btnaffecterF= true;
    this.btnaffecterR= false;

 })
}

/**************************************pfe files without note reporter************************ */

getPfeFileWithoutNoteR(){
  this.pfefileService.pfeFilesWithoutNoteR(this.currentUser).subscribe(pfeFile => {
    this.list_pfefile = pfeFile;
    this.btnaffecterV= false;
    this.btnaffecterF= false;
    this.btnaffecterR= true;

 })
}


getPfeFileHistory(a){
  this.pfefileService.allPfeFileHistory(a).subscribe(pfeFile => {
    this.list_pfefile_history = pfeFile;
    console.log("testhistpru"+pfeFile)
 })
 }


 getPfeFile(){
  this.pfefileService.allPfeFile(this.currentUser).subscribe(pfeFile => {
    this.list_pfefile = pfeFile;
    console.log("ghjkpk",this.list_pfefile)
 })
 }

//  pfeHistoryOut(){
//    this.showHistory=false;
//  }


}
