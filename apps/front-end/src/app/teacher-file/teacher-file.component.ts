import { Component, OnInit } from '@angular/core';
import { teacherfileService } from '@workshop/core-data';
import { PfeFile } from 'libs/core-data/src/lib/teacherfile/PfeFile';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-file',
  templateUrl: './teacher-file.component.html',
  styleUrls: ['./teacher-file.component.scss']
})
export class TeacherFileComponent implements OnInit {

  constructor(private teacherfileService: teacherfileService) {
    
  }

  ngOnInit() {
    this.getRapport();
    this.getFramer();
    this.getValidator();
  }

  i:number;
  id:number;
  valid;
  note = [];
  listFile = [] ;
  listFile2 = [] ;
  listFile3 = [] ;


  getRapport(){
    this.teacherfileService.getRapport().subscribe(PfeFile => {
      console.log(PfeFile);
      this.listFile = PfeFile;
   })
  }

  getFramer(){
    this.teacherfileService.getFramer().subscribe(PfeFile => {
      console.log(PfeFile);
      this.listFile2 = PfeFile;
   })
  }

  getValidator(){
    this.teacherfileService.getValidator().subscribe(PfeFile => {
      console.log(PfeFile);
      this.listFile3 = PfeFile;
   })
  }

  valider(selectedCountry) {
    this.teacherfileService.valider(selectedCountry.id,true).subscribe(res => {
      console.log(res)
      this.listFile3=res;
    });
    console.log(selectedCountry.id);
    window.location.reload();
 }

 giveNoteFramer(selectedCountry,note) {
  this.teacherfileService.giveNoteFramer(selectedCountry.id,note).subscribe(res => {
    console.log(res)
    window.location.reload();
  });
  }

  giveNoteReporter(selectedCountry,note) {
    this.teacherfileService.giveNoteReporter(selectedCountry.id,note).subscribe(res => {
      console.log(res)
      window.location.reload();
    });
    }

  setModif(selectedCountry,note) {
    this.teacherfileService.setModif(selectedCountry.id,note).subscribe(res => {
      console.log(res)
      window.location.reload();
    });
    }    

 jcp(selectedCountry) {
    this.valid=selectedCountry.valid;
    }
}