import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UiHeaderModule,
    UiFooterModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
