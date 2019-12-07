
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiHeaderModule,
    UiFooterModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,

  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
