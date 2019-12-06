import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule} from '@workshop/ui-footer';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    UiHeaderModule, UiFooterModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
