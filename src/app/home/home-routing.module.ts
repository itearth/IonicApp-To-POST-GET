import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing.page';
import { SignInPageComponent } from './sign-in/sign-in.page';
import { SignUpPageComponent } from './sign-up/sign-up.page';

const routes: Routes = [
  
  { path: '', 
  component: LandingPageComponent },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  { path: 'signin', 
  component: SignInPageComponent
 },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
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





// // home-routing.module.ts

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LandingPageComponent } from './landing/landing.page';

// const routes: Routes = [
//   {
//     path: 'landing',
//     component: LandingPageComponent,
//   },
//   // Add other routes if necessary
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class HomePageRoutingModule {}
