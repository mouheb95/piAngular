import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfeFileComponent } from './pfe-file/pfe-file.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListPfeFileComponent } from './list-pfe-file/list-pfe-file.component';
import { HeadOfDepartementComponent } from './head-of-departement/head-of-departement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '@workshop/ui-login';
import { HomeComponent } from 'apps/front-end/src/app/home/home.component';

import { CategoryComponent } from 'apps/front-end/src/app/head-of-departement/category/category.component';
import { OptionComponent } from 'apps/front-end/src/app/head-of-departement/option/option.component';
import { TeacherComponent } from 'apps/front-end/src/app/head-of-departement/teacher/teacher.component';



const routes: Routes = [
    { path: 'InternshipDirector/pfeFile/:id', component : PfeFileComponent },
    { path: 'home',  component : HomeComponent },
    { path: 'InternshipDirector/student', component: ListStudentComponent },
    { path: 'InternshipDirector/pfefile', component: ListPfeFileComponent},
    { path: 'InternshipDirector/dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    // { path: 'signUp', component: SignUpComponent },
    { path: 'headofdepartement/pfefile', component: HeadOfDepartementComponent },
    { path: 'headofdepartement/category', component: CategoryComponent },
    { path: 'headofdepartement/option', component: OptionComponent },
    { path: 'headofdepartement/teacher', component: TeacherComponent },

    { path: '**', redirectTo:"login", pathMatch: "full" },
  
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


