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
  var = 20;
  

  constructor( private dashboard : DashboardService) { }

  ngOnInit() {
   
    
   while(this.var == null){
    this.var = this.AllStageEtudiantEtranger();
   }
    console.log(this.var)
  }

  // resCategory(){
  //   const x = {
  //     "Succee": null
  //   } ;
  //   this.var = x;
  // }
  
  AllStageEtudiantEtranger() {
    this.dashboard.AllStageEtudiantEtranger().subscribe(res => {
      
      this.var=res;
      console.log(this.var)
   })
   
   return this.var;
   
  }

  reset() {
    const emptyP = {
      id :'',
    }
    this.a =emptyP;
  }

  
  public pieChartLabels: Label[] = ['pourcentage stage à l etranger', 'pourcentage stage en tunis'];
  public pieChartData: SingleDataSet = [this.var,100-this.var];
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








}
