import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DescriptionComponent } from './student-profile/description/description.component';
import { DescriptionEditComponent } from './student-profile/description-edit/description-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],

  exports: [
    SideBarComponent,
   DescriptionComponent,
   DescriptionEditComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    SideBarComponent,
    DescriptionComponent,
    DescriptionEditComponent
    
  ]
})
export class SharedModule { }
