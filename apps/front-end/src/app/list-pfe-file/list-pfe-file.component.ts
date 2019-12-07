import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PfeFileService } from '@workshop/core-data';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { PfeFile } from 'libs/core-data/src/lib/internshipDirector/pfe-file.service';
import { student } from 'libs/core-data/src/lib/internshipDirector/students.service';

@Component({
  selector: 'app-list-pfe-file',
  templateUrl: './list-pfe-file.component.html',
  styleUrls: ['./list-pfe-file.component.scss']
})
export class ListPfeFileComponent implements OnInit {

  constructor( private pfeFileService : PfeFileService) { }

  listPfeFile = [] ;

  @Input() s: student;

  
    idpfefile: number;
    pfeFile: any;
    popap= false;
    pipe= false;
    pipe2=!this.pipe;
    h= false;
  getPfeFile(){
    this.pfeFileService.findall().subscribe(pfeFile => {
      console.log(pfeFile);
      this.listPfeFile = pfeFile;

   })
  }
  valPfeFile(p) {
    this.pfeFileService.validatePfeFile(p).subscribe(pfeFile => {
      console.log(pfeFile);
      this.listPfeFile = pfeFile;
      this.pipe = false;
      this.pipe2=true;


  })
}


p: any;

reset() {
  const emptyP = {
    id :'',
  }
  this.p =emptyP;
}

hide() {
  this.h=true;

}


getPfeFileByID(a){
  this.pfeFileService.fetPfeFileByID(a).subscribe(pfe => {
    console.log(pfe);
    this.pfeFile = pfe;
    this.popap= true;
    this.pipe= true;
    this.pipe2=!this.pipe2;
    this.cancel();
    
 })
}
cancel() {
  this.pipe= false;
}
 

returnPage() {
  this.popap= false;
  
  this.pipe2=true;

  this.pipe= false;
  
}



getPfefileByYear() {
  this.pfeFileService.getPfefileByYear().subscribe(pfeFile => {
    console.log(pfeFile);
    this.listPfeFile = pfeFile;
})
}

getPfefileNotTreated() {
  this.pfeFileService.getPfefileNotTreated().subscribe(pfeFile => {
    console.log(pfeFile);
    this.listPfeFile = pfeFile;
})
}

refusePfeFile(p) {
  this.pfeFileService.refusePfeFile(p).subscribe(pfeFile => {
    console.log(pfeFile);
    this.listPfeFile = pfeFile;
    this.pipe = false;
    this.pipe2=true;


})
}

ngOnInit() {

  this.getPfeFile();
  this.reset();
  this.getPfefileByYear();
}

  

}
