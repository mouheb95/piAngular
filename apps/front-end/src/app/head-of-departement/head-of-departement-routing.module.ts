import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from 'apps/front-end/src/app/head-of-departement/category/category.component';
import { OptionComponent } from 'apps/front-end/src/app/head-of-departement/option/option.component';
import { TeacherComponent } from 'apps/front-end/src/app/head-of-departement/teacher/teacher.component';


const routes: Routes = [

  { path: 'headofdepartement/category', component: CategoryComponent },
  { path: 'headofdepartement/option', component: OptionComponent },
  { path: 'headofdepartement/teacher', component: TeacherComponent },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadOfDepartementRoutingModule { }
