import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStudentRoutingModule } from './list-student-routing.module';
import { FormsModule } from '@angular/forms';
import { ListStudentComponent } from './list-student.component';
import { UiFooterModule } from '@workshop/ui-footer';
import { UiHeaderModule } from '@workshop/ui-header';


@NgModule({
  declarations: [ListStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListStudentRoutingModule,
    UiFooterModule,
    UiHeaderModule
  ],
  exports: [ListStudentComponent]
})
export class ListStudentModule { }
