import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UniversityComponent } from '../../university/university.component';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule, MatPaginatorModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { DashboardService } from '../../modules/dashboard.service';
import { ProfileComponent } from '../../profile/profile.component';
import { DepartementComponent } from '../../departement/departement.component';
import { OptionsComponent } from '../../options/options.component';
import { ClasseComponent } from '../../classe/classe.component';



@NgModule({
  declarations: [DefaultComponent,
    DashboardComponent,
    UniversityComponent,
    ProfileComponent,
    DepartementComponent,
    OptionsComponent,
    ClasseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    FlexModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
