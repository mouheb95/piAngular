import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PieComponent } from './widgets/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule


  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PieComponent
  ]
})
export class SharedModule { }
