import { Component, OnInit, ViewChild } from '@angular/core';
import { UniversityService } from '../../../../../libs/core-data/src/lib/university/university.service';
import { University } from './University'
import { PfeFile } from '@workshop/core-data';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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
  displayedColumns: string[] = ['University Id', 'Name', 'Address', 'Owner','Site','Actions','Edit'];
  dataSource = new MatTableDataSource<University>(this.University);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {

    this.universityService.findUniversity().subscribe(res => {
      this.University = res
    })

    this.dataSource.paginator = this.paginator;

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



  updateUniversity( ){
    this.universityService.updateUniversity(this.currentUniversity).subscribe(res => {
      console.log(res)
    });
  }



}
