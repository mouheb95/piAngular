import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfeFileComponent } from './pfe-file.component';


const routes: Routes = [
  {
    path: '', component: PfeFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfeFileRoutingModule { }
