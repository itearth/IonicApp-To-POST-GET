import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],

  exports: [
    SideBarComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    SideBarComponent
  ]
})
export class SharedModule { }
