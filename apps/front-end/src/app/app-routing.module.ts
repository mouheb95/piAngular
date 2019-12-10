import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { UniversityComponent } from './university/university.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartementComponent } from './departement/departement.component';
import { OptionsComponent } from './options/options.component';
import { ClasseComponent } from './classe/classe.component';
import { PieComponent } from './shared/widgets/pie/pie.component';


//import { LoginComponent } from '@workshop/ui-login';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: PieComponent
  },{
    path: 'university',
    component: UniversityComponent
  },{
    path: 'profiles',
    component: ProfileComponent
  },{
    path: 'departement',
    component: DepartementComponent
  }, {
      path: 'options',
      component: OptionsComponent
    },
    {
      path: 'classe',
      component: ClasseComponent
    }

  ]

  //{ path: 'login', component: LoginComponent }
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
