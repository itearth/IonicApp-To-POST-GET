
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/Guard/authguard';
import { LandingPageComponent } from './session/landing/landing.page';
import { ProfileComponent } from './home/profile/profile.component';

const routes: Routes = [
  // the AuthGuard checks if the user is authenticated by verifying the existence of 'userData' in local storage. If the user is not authenticated, they will be redirected to the sign-in page.
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then(m => m.SessionPageModule)
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'profile', 
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
