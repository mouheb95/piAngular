import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsService } from '../../../../../libs/core-data/src/lib/options/options.service';
import { Option } from './Option';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  Option : any=[];
  currentOptions=new Option();

  displayedColumns: string[] = ['Id',  'Name','Score'];
  dataSource = new MatTableDataSource<Option>(this.Option);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private optionsService : OptionsService) { }

  ngOnInit() {

    this.optionsService.findOptions().subscribe(res => {
      this.Option = res
    })

    this.dataSource.paginator = this.paginator;
  }

}
