import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  pieChart() {
    return [{
      name: 'Students',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Teachers',
      y: 11.84
    }, {
      name: 'Directors',
      y: 10.85
    }, {
      name: 'HeadofDepartement',
      y: 4.67
    },];
  }
}
