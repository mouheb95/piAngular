import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UiHeaderModule,
    UiFooterModule,
    ChartsModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
