import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'apps/front-end/src/app/app-routing.module';

@NgModule({
  imports: [CommonModule,
            AppRoutingModule],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class UiHeaderModule {}

