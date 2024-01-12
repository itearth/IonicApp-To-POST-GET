import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../session/landing/landing.page';
import { SignInPageComponent } from '../session/sign-in/sign-in.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'profile', 
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }