

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPageComponent } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
