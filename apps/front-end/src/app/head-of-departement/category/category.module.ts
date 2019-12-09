import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiHeaderModule,
    UiFooterModule,
    CategoryRoutingModule
  ],
  exports: [CategoryComponent]
})
export class CategoryModule { }
