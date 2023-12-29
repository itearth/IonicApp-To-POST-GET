
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/Guard/authguard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./session/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./home/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },

  // the AuthGuard checks if the user is authenticated by verifying the existence of 'userData' in local storage. If the user is not authenticated, they will be redirected to the sign-in page.
  {
    path: 'dashboard',
    loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canActivate: [AuthGuard], 
  },  
  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then( m => m.SessionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
