import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@workshop/core-data';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.resReclamation();
    console.log(this.currentUser)
  }
  Notification;
  currentUser= JSON.parse(localStorage.getItem('currentUser')).id;

  resReclamation(){
    this.Notification = {
      "id": null,
      "subject": "",
      "message": ""
    } ;
  }
  sendRec(){
    console.log(this.Notification)
  this.studentService.sendReclamation(this.currentUser,this.Notification).subscribe(recl => {
    this.Notification = recl;
    
 })
}

}
