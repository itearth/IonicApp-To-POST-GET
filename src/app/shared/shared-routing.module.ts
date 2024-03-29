import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LandingPageComponent } from '../session/landing/landing.page';
import { ProfileComponent } from '../home/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SideBarComponent,
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedPageRoutingModule { }
