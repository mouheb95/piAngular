import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule } from '@angular/forms';

import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule} from '@workshop/ui-footer'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    UiHeaderModule, UiFooterModule,
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
