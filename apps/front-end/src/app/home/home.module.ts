import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
