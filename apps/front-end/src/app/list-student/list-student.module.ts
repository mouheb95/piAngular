import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStudentRoutingModule } from './list-student-routing.module';
import { FormsModule } from '@angular/forms';
import { ListStudentComponent } from './list-student.component';
import { UiFooterModule } from '@workshop/ui-footer';
import { UiHeaderModule } from '@workshop/ui-header';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [ListStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListStudentRoutingModule,
    UiFooterModule,
    UiHeaderModule,
    Ng2SearchPipeModule
  ],
  exports: [ListStudentComponent]
})
export class ListStudentModule { }
