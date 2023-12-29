
// src/app/landing/landing.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LandingPageComponent } from './landing.page';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [LandingPageComponent], // Add this line if needed
})
export class LandingPageModule {}
