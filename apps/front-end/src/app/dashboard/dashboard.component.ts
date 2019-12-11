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














  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [2, 1, 1], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Dot-It', 'Scality', 'VERMEG'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }








  public chartType2: string = 'doughnut';

  public chartDatasets2: Array<any> = [
    { data: [2, 1, 1], label: 'My First dataset' }
  ];

  public chartLabels2: Array<any> = ['JEE', 'Dot-Net', 'Angular'];

  public chartColors2: Array<any> = [
    {
      backgroundColor: [ '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: [ '#5AD3D1', '#FFC870', '#A8B3C5'],
      borderWidth: 2,
    }
  ];

  public chartOptions2: any = {
    responsive: true
  };
  public chartClicked2(e: any): void { }
  public chartHovered2(e: any): void { }



}
