import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../session/landing/landing.page';

import { HttpClientModule } from '@angular/common/http';
import { DashboardPage } from './dashboard/dashboard.page';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardPage,
    SideBarComponent
  ]
})
export class HomePageModule { }
