import { Component, OnInit } from '@angular/core';
import { PfeFile, PfefileService, StudentService, Student } from '@workshop/core-data';

@Component({
  selector: 'app-pfe-file',
  templateUrl: './pfe-file.component.html',
  styleUrls: ['./pfe-file.component.scss']
})
export class PfeFileComponent implements OnInit {
  alert_condution = false;
  currentStudent:Student;
  currentPfeFile: PfeFile;
  list_company;// Company[];
  company;
  condition_on_select_company = false;

  constructor(private pfefileService: PfefileService, private studentService: StudentService) { }
  
  ngOnInit() {
    
    this.resetPfeFile();
    this.studentService.findStudent(3).subscribe(res => {
    this.currentPfeFile.student = res;  
  }); 

    this.pfefileService.findCompanyAll().subscribe(res => {
    this.list_company = res;
  })

  this.studentService.hasPfe(3).subscribe(res => {
    if(res != null)
    {
      this.currentPfeFile = res
      this.condition_on_select_company = true;
    }
  });

  console.log(this.currentPfeFile)
  }

  resetPfeFile(){
    const emptyPFeFile = {
      id: null,
      description: "",
      fonctionality: "",
      keyWord : "",
      problematic: "",
       title: "",
      currentYear: "",
      category: null,
      company: null,
      student: null,
      framer: null,
    }

    return this.currentPfeFile = emptyPFeFile;
  }

  savechanges(pfeFile: PfeFile){
    this.company.phone = "52071897";
    pfeFile.company = this.company;
    const pfeFileLocal = {
      id: pfeFile.id,
      description: pfeFile.description,
      fonctionality: pfeFile.fonctionality,
      keyWord : pfeFile.keyWord,
      problematic: pfeFile.keyWord,
      title: pfeFile.title,
      currentYear: pfeFile.currentYear,
      category: {"category":1},
      company: pfeFile.company,
      student: pfeFile.student,
      framer: {"profile":2},
    }
    this.currentPfeFile = pfeFileLocal;
    console.log(this.currentPfeFile);
    if(pfeFile.id === null){
    this.createPfeFile(this.currentPfeFile);
    } else {
      this.updatePfeFile(this.currentPfeFile);
    } 
  }
  createPfeFile(pfeFile: PfeFile){
      
    this.pfefileService.createPfeFile(this.currentPfeFile).subscribe(res => {
      this.currentPfeFile = res;
      this.condition_on_select_company = true;
    });
  }

  updatePfeFile(pfeFile: PfeFile){
    this.pfefileService.updatePfeFile(this.currentPfeFile).subscribe(res => {
      console.log(res)
    });
  }

  showCancelPfe(){
    this.alert_condution = true;
  }
  hidecancelPfe(){
    this.alert_condution = false;
  }
  cancelPfe(currentPfeFile){
    this.hidecancelPfe();
    console.log(currentPfeFile.id);
    this.pfefileService.cancelPfeFile(currentPfeFile).subscribe(res => {
      console.log(res)
    });
  }


  onChangeObj(newObj) {  
    this.company = newObj;
  }
}
