import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPfeFileRoutingModule } from './list-pfe-file-routing.module';
import { FormsModule } from '@angular/forms';
import { ListPfeFileComponent } from './list-pfe-file.component';
import { PfeFileModule } from '../pfe-file/pfe-file.module';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';


@NgModule({
  declarations: [ListPfeFileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListPfeFileRoutingModule,
    PfeFileModule,
    UiHeaderModule,
    UiFooterModule
  ],
  exports: [ListPfeFileComponent]
})
export class ListPfeFileModule { }
