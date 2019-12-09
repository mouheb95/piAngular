import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

import { teacherfileService } from '@workshop/core-data';

@Component({
  selector: 'app-teacher-file-view',
  templateUrl: './teacher-file-view.component.html',
  styleUrls: ['./teacher-file-view.component.scss']
})
export class TeacherFileViewComponent implements OnInit {

  constructor(private route : Router,private router:ActivatedRoute,private teacherfileService: teacherfileService) { }

  ngOnInit() {
    this.getTeacher()
  }

  getTeacher(){

      this.router.params.subscribe(params => {
        const id=params['id']
        console.log(id)
        
      });
    }

  print(){
  var element = document.getElementById('element-to-print');
  var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

//html2pdf().from(element).set(opt).save();

    }
  

}
