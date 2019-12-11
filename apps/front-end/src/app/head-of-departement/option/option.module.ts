import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionRoutingModule } from './option-routing.module';
import { OptionComponent } from './option.component';
import { UiFooterModule } from '@workshop/ui-footer';
import { UiHeaderModule } from '@workshop/ui-header';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OptionComponent],
  imports: [
    CommonModule,
    OptionRoutingModule,
    UiFooterModule,
    UiHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [OptionComponent]
})
export class OptionModule { }
