import { Component, OnInit } from '@angular/core';
import { PfeFile, PfefileService, StudentService, Student, PfefileHistoryService } from '@workshop/core-data';


@Component({
  selector: 'app-pfe-file',
  templateUrl: './pfe-file.component.html',
  styleUrls: ['./pfe-file.component.scss']
})
export class PfeFileComponent implements OnInit {
  show_update_pfe = false;
  show_note_pfe = false;
  alert_condution = false;
  currentUser = JSON.parse( localStorage.getItem('currentUser')).profile;
  currentPfeFile: PfeFile;
  old_pfefile: PfeFile;
  list_company;// Company[];
  company;
  condition_on_select_company = false;
  show_pfefile = true 

  constructor(
    private pfefileService: PfefileService, 
    private studentService: StudentService, 
    private pfeFileHistoryService: PfefileHistoryService
    ) { }
  
  ngOnInit() {
  
    this.resetPfeFile();
    this.hasPfe();
    this.findAllCompany();
  
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
      note_IR: null,
      note_F: null
    }

    return this.currentPfeFile = emptyPFeFile;
  }

  savechanges(pfeFile: PfeFile){

    this.currentPfeFile = pfeFile;
    if(pfeFile.id === null){
    this.createPfeFile(this.currentPfeFile);
    } else {
      this.updatePfeFile(this.currentPfeFile);
    } 
    this.show_update_pfe = !this.show_update_pfe;
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

  pfeFileHistory(id){
    this.show_pfefile = !this.show_pfefile;
    this.pfeFileHistoryService.pfeFileHistory(id).subscribe(res => {
      console.log(res);
    })
  }

  onChangeObj(newObj) {  
    this.company = newObj;
  }

  cancelPfe(currentPfeFile){
    this.hidecancelPfe();
    console.log(currentPfeFile.id);
    this.pfefileService.cancelPfeFile(currentPfeFile).subscribe(res => {
      console.log(res)
    });
  }

  showPfeFile(){
    this.show_pfefile = !this.show_pfefile;
  }

  showCancelPfe(){
    this.alert_condution = true;
  }

  hidecancelPfe(){
    this.alert_condution = false;
  }

  showNotelPfe(){
    this.show_note_pfe = true;
  }

  hideNotelPfe(){
    this.show_note_pfe = false;
  }
  
  hideUpdatePfe(){
    this.show_update_pfe = !this.show_update_pfe;
  }
  
  hasPfe(){
    this.studentService.hasPfe(this.currentUser).subscribe(res => {
      this.currentPfeFile = res
      this.old_pfefile = res;
  });
  }

  findAllCompany(){
    this.pfefileService.findCompanyAll().subscribe(res => {
      this.list_company = res;
    })
  }
}
