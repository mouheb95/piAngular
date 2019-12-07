import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeadOfDepartementComponent } from './head-of-departement/head-of-departement.component';


const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
      { path: 'headofdepartement',
	  component: HeadOfDepartementComponent }

];
export default appRoutes;
