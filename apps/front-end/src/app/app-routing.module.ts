import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

import { SignUpComponent } from '@workshop/ui-sign-up';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
    { path: '', redirectTo:"login", pathMatch: "full" },
    { path: 'student', component: StudentComponent },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'pfefile', loadChildren: () => import('./pfe-file/pfe-file.module').then(m => m.PfeFileModule) },
    
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: '**', redirectTo:"login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
