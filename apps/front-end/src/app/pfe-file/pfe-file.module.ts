import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeFileRoutingModule } from './pfe-file-routing.module';
import { PfeFileComponent } from './pfe-file.component';
import { FormsModule } from '@angular/forms';

import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule} from '@workshop/ui-footer'

@NgModule({
  declarations: [PfeFileComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    PfeFileRoutingModule,
    UiHeaderModule, UiFooterModule
  ],

  exports: [
    PfeFileComponent
  ]
})
export class PfeFileModule { }
