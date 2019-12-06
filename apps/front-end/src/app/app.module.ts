
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';
import { UiLoginModule } from '@workshop/ui-login';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {APP_BASE_HREF, CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';
import { UiSignUpModule } from '@workshop/ui-sign-up';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    StudentModule,
    UiLoginModule,
    UiSignUpModule,
    UiHeaderModule,
    UiFooterModule,
    
    AppRoutingModule

  ],
  exports: [
    AppComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
