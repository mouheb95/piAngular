
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

import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { DepartementComponent } from './departement/departement.component';
import { ProfileComponent } from './profile/profile.component';
import { OptionsComponent } from './options/options.component';
import { ClasseComponent } from './classe/classe.component';
import { DefaultModule } from './layouts/default/default.module';







@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DefaultModule,

    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,

    UiLoginModule,
    UiHeaderModule,
    UiFooterModule,
    AppRoutingModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
