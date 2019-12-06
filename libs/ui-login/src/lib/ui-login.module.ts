import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { MaterialModule } from '@workshop/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { NxModule } from '@nrwl/nx';

import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule ,
    NxModule.forRoot(),
    RouterModule.forRoot([]),

/*     
    UiFooterModule,
    UiHeaderModule */
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule {}
