import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniversityComponent } from './university.component';




@NgModule({
  declarations: [UniversityComponent],
  imports: [
    CommonModule,
    FormsModule ,
  ],
  exports: [
    UniversityComponent
  ]

})
export class UniversityModule { }
