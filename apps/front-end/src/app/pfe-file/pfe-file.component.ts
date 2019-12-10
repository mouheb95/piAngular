import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PfeFileService } from '@workshop/core-data';
import { PfeFile } from 'libs/core-data/src/lib/internshipDirector/pfe-file.service';
import { student, StudentsService } from 'libs/core-data/src/lib/internshipDirector/students.service';
import { ActivatedRoute } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-pfe-file',
  templateUrl: './pfe-file.component.html',
  styleUrls: ['./pfe-file.component.scss']
})
export class PfeFileComponent implements OnInit {

  private id:any;
  student;
  teacher;
  company;
  idpfefile: number;
  pfeFile: any;
  p: any;
  @Input() s: PfeFile;
  listTeacher = [] ;
  badWords = ['fuck', 'shit', 'hell', 'ass','asshole', 'merde', 'dumn', 'putain','stage'];
  // var Filter = require('bad-words');
  // filter = new Filter();
  constructor( private pfeFileService : PfeFileService, private activatedroute : ActivatedRoute,
    private studentService : StudentsService) { }

    ngOnInit() {
      this.resStudent();
      this.resTeacher();
      this.resVal();
      this.resRep();
      this.resfra();
      this.resCompany();
      this.activatedroute.paramMap.subscribe (result => this.id=result.get('id'));
      this.getPfeFileByID(this.id);
      this.getAllTeacher();
      //console.log(filter.clean("don't be asshole"));
  
  
    }



  getPfeFileByID(a){
    this.pfeFileService.fetPfeFileByID(a).subscribe(pfe => {
      console.log(pfe);
      this.pfeFile = pfe;

   })
  }
  

  // reset() {
  //   const emptyP = {
  //     'id' :null,
  //     'name':'',
  //     'verification':''
  //   }
  //   this.p =emptyP;
  // }

    resStudent(){
      this.pfeFile = {
      "student":"",
          } ;
     
  }

  resTeacher(){
    this.teacher = {
      "id":null,
      "name":"",
      "lastname":"",
      "birthdate":"",
      "email":"",
      "yearOfRecrutement":"",
      "diploma":""
          } ;
    
  }

  resVal(){
    this.pfeFile = {
      "validator":"",
          } ;
    
  }
  resRep(){
    this.pfeFile = {
      "reporter":"",
          } ;
    
  }
  resfra(){
    this.pfeFile = {
      "framer":"",
          } ;
    
  }

  resCompany(){
    this.company = {
      "name":"",
          } ;
    
  }
  


    affectationReporter(b){
    this.pfeFileService.affectationReporter(this.teacher,this.pfeFile).subscribe(res=>{
      console.log(res);
      this.pfeFile = res;
    })
  }

  getAllTeacher(){
    this.pfeFileService.getallTeacher().subscribe(teacher => {
      console.log(teacher);
      this.listTeacher = teacher;

   })
  }

  getTeacherByID(a){
    this.resTeacher();
    this.pfeFileService.getTeacherByID(a).subscribe(t => {
      this.teacher= t;
      console.log(this.teacher);

   })
  }

  CompanyByID(a){
    this.pfeFileService.CompanyByID(a).subscribe(company => {
      
      this.company = company;
      console.log(this.company);

   })
  }

  StudentByID(a){
    this.resStudent();
    this.studentService.findStudentById(a).subscribe(student => {
      
      this.student = student;
      console.log(this.student);
      

   })
  }




 

}
