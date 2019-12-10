import { Component, OnInit, ViewChild } from '@angular/core';
import { ClasseService } from '../../../../../libs/core-data/src/lib/classe/classe.service';
import { Classe } from './Classe';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  Classe : any=[];
  currentClasse= new Classe();

  displayedColumns: string[] = ['Id',  'Number','NumberOfStudent','Actions','Edit'];
  dataSource = new MatTableDataSource<Classe>(this.Classe);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private classeService : ClasseService) { }

  ngOnInit() {

    this.classeService.findClasse().subscribe(res => {
      this.Classe = res
    })

    this.dataSource.paginator = this.paginator;
  }


  deleteClasse(id: any) {
    this.classeService.deleteClasse(id).subscribe(res => {
      this.Classe = res
    })
  }

  addClasse() {

    this.classeService.addClasse(this.currentClasse).subscribe(res => {
      this.Classe = res
    })
  }

  updateClasse( ){
    this.classeService.updateClasse(this.classeService).subscribe(res => {
      console.log(res)
    });
  }

}
