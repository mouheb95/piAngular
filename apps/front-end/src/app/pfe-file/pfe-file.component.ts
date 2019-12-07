import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PfeFileService } from '@workshop/core-data';
import { PfeFile } from 'libs/core-data/src/lib/internshipDirector/pfe-file.service';
import { student } from 'libs/core-data/src/lib/internshipDirector/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pfe-file',
  templateUrl: './pfe-file.component.html',
  styleUrls: ['./pfe-file.component.scss']
})
export class PfeFileComponent implements OnInit {

  private id:any;

  constructor( private pfeFileService : PfeFileService, private activatedroute : ActivatedRoute) { }

  idpfefile: number;
  pfeFile: any;
  p: any;
  b: any;
  @Input() s: PfeFile;
  listTeacher = [] ;


  getPfeFileByID(a){
    this.pfeFileService.fetPfeFileByID(a).subscribe(pfe => {
      console.log(pfe);
      this.pfeFile = pfe;

   })
  }
  

  reset() {
    const emptyP = {
      id :'',
    }
    this.p =emptyP;
  }

    affectationReporter(b){
    this.pfeFileService.affectationReporter(this.b,this.pfeFile).subscribe(res=>{
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
    this.pfeFileService.getTeacherByID(a).subscribe(teacher => {
      console.log(teacher);
      this.b = teacher;

   })
  }

  ngOnInit() {
    this.reset();
    this.activatedroute.paramMap.subscribe (result => this.id=result.get('id'));
    this.getPfeFileByID(this.id);
    this. getAllTeacher();
    this.getTeacherByID(this.b);

  }

}
