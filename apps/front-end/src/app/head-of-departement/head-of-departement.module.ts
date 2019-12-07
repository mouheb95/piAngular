import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadOfDepartementRoutingModule } from './head-of-departement-routing.module';
import { FormsModule } from '@angular/forms';
import { HeadOfDepartementComponent } from './head-of-departement.component';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';


@NgModule({
  declarations: [HeadOfDepartementComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeadOfDepartementRoutingModule,
    UiHeaderModule,
    UiFooterModule
  ],
  exports: [
    HeadOfDepartementComponent
  ]
})
export class HeadOfDepartementModule { }