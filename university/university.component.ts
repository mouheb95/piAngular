import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../../../../libs/core-data/src/lib/university/university.service';
import { University } from './University'
import { PfeFile } from '@workshop/core-data';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})

export class UniversityComponent implements OnInit {

  constructor(private universityService: UniversityService) {
  }

  University: any = [];

  currentUniversity=new University();

  ngOnInit() {

    this.universityService.findUniversity().subscribe(res => {
      this.University = res
    })


  }

  deleteUniversity(id: any) {
    this.universityService.deleteUniversity(10).subscribe(res => {
      this.University = res
    })
  }

  addUniversity() {

    this.universityService.addUniversity(this.currentUniversity).subscribe(res => {
      this.University = res
    })
  }



  updateUniversity(university: University){
    this.universityService.updateUniversity(this.University).subscribe(res => {
      console.log(res)
    });
  }



}
