import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeFileRoutingModule } from './pfe-file-routing.module';
import { PfeFileComponent } from './pfe-file.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PfeFileComponent],
  imports: [
    CommonModule,
    FormsModule,
    PfeFileRoutingModule
  ],

  exports: [
    PfeFileComponent
  ]
})
export class PfeFileModule { }
