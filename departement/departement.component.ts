import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartementService } from '../../../../../libs/core-data/src/lib/departement/departement.service';
import { Departement} from './Departement';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  Departement :any =[];
  currentDepartement=new Departement();

  displayedColumns: string[] = ['Id', 'Description', 'Name'];
  dataSource = new MatTableDataSource<Departement>(this.Departement);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private departementService : DepartementService) { }

  ngOnInit() {

    this.departementService.findDepartement().subscribe(res => {
      this.Departement = res
    })

    this.dataSource.paginator = this.paginator;
  }

  addDepartement(){
    this.departementService.addDepartement(this.currentDepartement).subscribe(res => {
      this.Departement = res
    })

  }



}
