import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../session/landing/landing.page';
import { SignInPageComponent } from '../session/sign-in/sign-in.page';
import { SignUpPageComponent } from './sign-up/sign-up.page';
import { DashboardPage } from './dashboard/dashboard.page';

const routes: Routes = [
  
  { path: '', 
  component: LandingPageComponent 
},
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  { path: 'signin', 
  component: SignInPageComponent
 },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'signup', 
  component: SignUpPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }






