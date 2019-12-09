import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@workshop/core-data';
import { SingleDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  a:any;
  constructor( private dashboard : DashboardService) { }

  
  AllStageEtudiantEtranger() : number{
    this.dashboard.AllStageEtudiantEtranger().subscribe(res => {
      
      this.a=res;
      
   })
   console.log(this.a)
   return this.a;
   
  }

  reset() {
    const emptyP = {
      id :'',
    }
    this.a =emptyP;
  }

  
  public pieChartLabels: Label[] = ['pourcentage stage à l etranger', 'pourcentage stage en tunis'];
  public pieChartData: SingleDataSet = [20,80];
  public pieChartType = 'pie';







  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [80, 60], label: 'In Tunis'},
    {data: [40, 25], label: 'Off Tunis'}
  ];






  ngOnInit() {
    this.AllStageEtudiantEtranger();
  }

}
