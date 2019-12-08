import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UniversityComponent } from '../../university/university.component';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { DashboardService } from '../../modules/dashboard.service';



@NgModule({
  declarations: [DefaultComponent,
    DashboardComponent,
    UniversityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    FlexModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
