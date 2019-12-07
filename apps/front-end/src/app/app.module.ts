
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule } from '@workshop/core-data';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListPfeFileComponent } from './list-pfe-file/list-pfe-file.component';
import { ListPfeFileModule } from './list-pfe-file/list-pfe-file.module';
import { PfeFileComponent } from './pfe-file/pfe-file.component';
import { PfeFileModule } from './pfe-file/pfe-file.module';
import { ListStudentComponent } from './list-student/list-student.component';
import { HeadOfDepartementComponent } from './head-of-departement/head-of-departement.component';
import { HeadOfDepartementModule } from './head-of-departement/head-of-departement.module';
import { AppRoutingModule } from './app-routing.module';
import { CategoryModule } from './category/category.module';
import { CategoryComponent } from './category/category.component';
import { ListStudentModule } from './list-student/list-student.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { APP_BASE_HREF } from '@angular/common';
import { UiLoginModule } from '@workshop/ui-login';
//import { UiSignUpModule } from '@workshop/ui-sign-up';







// const routes: Routes = [
//   {path: 'pfeFile/:id', component : PfeFileComponent},


// ];




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiHeaderModule,
    UiFooterModule,
    CoreDataModule,
    FormsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ListPfeFileModule,
    ListStudentModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeadOfDepartementModule,
    CategoryModule,
    AppRoutingModule,
    DashboardModule,
    AppRoutingModule,
    UiLoginModule,
  //  UiSignUpModule
    
    
    
    


  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
