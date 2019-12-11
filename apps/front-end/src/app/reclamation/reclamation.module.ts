import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { FormsModule } from '@angular/forms';
import { UiFooterModule } from '@workshop/ui-footer';
import { UiHeaderModule } from '@workshop/ui-header';


@NgModule({
  declarations: [ReclamationComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiFooterModule,
    UiHeaderModule,
    ReclamationRoutingModule
  ],
  exports: [ReclamationComponent]
})
export class ReclamationModule { }
