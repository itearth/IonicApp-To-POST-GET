import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageComponent } from './sign-in/sign-in.page';
import { LandingPageComponent } from './landing/landing.page';
import { SessionPageRoutingModule } from './session-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SignInPageComponent,
    LandingPageComponent
  ]
})
export class SessionPageModule { }
