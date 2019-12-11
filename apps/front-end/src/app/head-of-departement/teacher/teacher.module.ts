import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';


@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiHeaderModule,
    UiFooterModule,
    TeacherRoutingModule,
    ReactiveFormsModule
  ],
  exports: [TeacherComponent]
})
export class TeacherModule { }
