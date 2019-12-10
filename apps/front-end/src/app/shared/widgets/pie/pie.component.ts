import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{DashboardComponent} from '../../../modules/dashboard/dashboard.component';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  url : string = "http://localhost:18080/piPfe-web/Pfe/profile";


d = [{name: "EmptyChart ", y: 0, sliced: true, selected: true},
     {name: "EmptyChart ", y: 0},
 {name: "EmptyChart ", y: 0},
{name: "EmptyChart ", y: 0}
];

  f = [{name: "Students", y: 0, sliced: true, selected: true},
    {name: "Teachers", y: 0},
    {name: "Directors", y: 0},
    {name: "HeadofDepartement", y: 0}
  ];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'RANDOM DATA'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.d
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 999);

  }
stat(){
    console.log(this.f);
  this.chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'stat'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    exporting: {
      enabled: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data:this.f
    }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
}
  receiveEvent(e){
    console.log(e);
    this.f=e;

  }
}
