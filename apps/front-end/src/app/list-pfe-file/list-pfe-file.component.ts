import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PfeFileService, PfeFileCancellingService } from '@workshop/core-data';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { PfeFile } from 'libs/core-data/src/lib/internshipDirector/pfe-file.service';
import { student } from 'libs/core-data/src/lib/internshipDirector/students.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import * as jsPDF from 'jspdf';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
declare const $;



@Component({
  selector: 'app-list-pfe-file',
  templateUrl: './list-pfe-file.component.html',
  styleUrls: ['./list-pfe-file.component.scss']
})
export class ListPfeFileComponent implements OnInit {
  @ViewChild('content', {static: false}) content: ElementRef;
  

  constructor( private pfeFileService : PfeFileService, private pfeFileCancellingService : PfeFileCancellingService) { }

  listPfeFile: PfeFile [] = [] ;
  listPfeFileCancelling= [] ;

  @Input() s: student;

    hideArchieve= true;
    idpfefile: number;
    pfeFile: any;
    popap= false;
    pipe= false;
    pipe2=!this.pipe;
    h= false;
    baliz= false;

    ngOnInit() {

      this.getPfeFile();
      this.reset();
      this.getPfefileByYear();
    
    }



  getPfeFile(){
    this.pfeFileService.findall().subscribe(pfeFile => {
      console.log(pfeFile);
      this.listPfeFile = pfeFile;
      this.hideArchieve = true;

   })
  }
  valPfeFile(p) {
    this.pfeFileService.validatePfeFile(p).subscribe(pfeFile => {
      console.log(pfeFile);
      this.listPfeFile = pfeFile;
      this.pipe = false;
      this.pipe2=true;
      this.getPfeFile();


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
    this.getPfeFile();
    
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
    this.hideArchieve = true;
})
}

getPfefileNotTreated() {
  this.pfeFileService.getPfefileNotTreated().subscribe(pfeFile => {
    console.log(pfeFile);
    this.listPfeFile = pfeFile;
    this.hideArchieve = true;
})
}

refusePfeFile(p) {
  this.pfeFileService.refusePfeFile(p).subscribe(pfeFile => {
    console.log(pfeFile);
    this.listPfeFile = pfeFile;
    this.pipe = false;
    this.pipe2=true;
    this.getPfeFile();


})
}

public makePdf() { 
  let doc = new jsPDF();
  let speciaElementHandlers={
    '#editor':function(element,rendere)
    {return true;}
  };
  let content = this.content.nativeElement;

  doc.fromHTML(content.innerHTML, 20,15, {
    'width':30,
    'speciaElementHandlers': speciaElementHandlers
  }
  );
  doc.setFontSize(12);
  doc.setFontSize(8);
  doc.setFontStyle('italic');
  doc.setFont("helvetica");
doc.setFontType("bold");
doc.setFontSize(9);
doc.line(100,100,100,100);
doc.setLineWidth(0.5);
doc.line(20, 25, 160, 25);
doc.text(30,20,"Notes")

  doc.save('PfeFiles.pdf');
}


generatePdf(){
  let content = this.content.nativeElement;

  const documentDefinition = this.getDocumentDefinition();
  pdfMake.createPdf(documentDefinition).open();
 }



getDocumentDefinition() {
  sessionStorage.setItem('resume', JSON.stringify(this.listPfeFile));
  return {
    content: [
      {
        text: 'RESUME',
        bold: true,
        fontSize: 20,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        columns: [
          [{
            text: this.listPfeFile.length,
            style: 'name'
          }]
        ]
  }
]
};}




getPfeFileArchieve(){
  this.pfeFileCancellingService.findallallPfeFileArchieve().subscribe(PfeFileCancellingRequest => {
    console.log(PfeFileCancellingRequest);
    this.listPfeFile = PfeFileCancellingRequest;
    

 })
 this.hideArchieve= false;
}



}
