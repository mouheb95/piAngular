import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfeFileComponent } from './pfe-file/pfe-file.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListPfeFileComponent } from './list-pfe-file/list-pfe-file.component';
import { HeadOfDepartementComponent } from './head-of-departement/head-of-departement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '@workshop/ui-login';


const routes: Routes = [
    { path: 'pfeFile/:id', component : PfeFileComponent },
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'student', component: ListStudentComponent },
    { path: 'pfefile', component: ListPfeFileComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'headofdepartement', component: HeadOfDepartementComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'signUp', component: SignUpComponent },
    { path: '**', redirectTo:"login", pathMatch: "full" },
  
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


