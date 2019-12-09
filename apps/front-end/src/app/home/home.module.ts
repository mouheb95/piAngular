import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiHeaderModule } from '@workshop/ui-header';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiHeaderModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
