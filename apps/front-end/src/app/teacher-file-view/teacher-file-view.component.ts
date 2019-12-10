import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router'; 
import { teacherfileService } from '@workshop/core-data';
import {html2pdf} from 'html2pdf.js'

@Component({
  selector: 'app-teacher-file-view',
  templateUrl: './teacher-file-view.component.html',
  styleUrls: ['./teacher-file-view.component.scss']
})
export class TeacherFileViewComponent implements OnInit {

  constructor(private route : Router,private router:ActivatedRoute,private teacherfileService: teacherfileService) { }

  ngOnInit() {
    this.getTeacher();
    this.getValidator();
  }

  listFile3 = [];
  yet;
  
  getTeacher(){
      this.router.params.subscribe(params => {
        const id=params['id']
        this.yet=id;
        console.log(id)     
      });
    }

  getValidator(){
    this.teacherfileService.getValidator().subscribe(PfeFile => {
      console.log(PfeFile);
      this.listFile3 = PfeFile;
    })
  }

  print(){
  var element = document.getElementById('pdf');
  var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
  }

}
