import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionRoutingModule } from './option-routing.module';
import { OptionComponent } from './option.component';
import { FormsModule } from '@angular/forms';
import { UiFooterModule } from '@workshop/ui-footer';
import { UiHeaderModule } from '@workshop/ui-header';


@NgModule({
  declarations: [OptionComponent],
  imports: [
    CommonModule,
    OptionRoutingModule,
    UiFooterModule,
    UiHeaderModule,
    FormsModule
  ],
  exports: [OptionComponent]
})
export class OptionModule { }
