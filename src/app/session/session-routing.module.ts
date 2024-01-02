import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing/landing.page';
import { SignInPageComponent } from './sign-in/sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionPageRoutingModule { }
