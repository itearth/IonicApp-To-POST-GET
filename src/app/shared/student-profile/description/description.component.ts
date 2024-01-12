import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { DescriptionEditComponent } from '../description-edit/description-edit.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  description = "Here's a small text description for the card content. Nothing more, nothing less.";
  isEditDialogOpen = false;

  // constructor(private modalController: ModalController) {}
  
constructor(private modalController: ModalController, private zone: NgZone) {}


  ngOnInit() {}

  openEditDialog() {
    this.isEditDialogOpen = true;
    this.presentEditModal();
  }

  async presentEditModal() {
    const modal = await this.modalController.create({
      component: DescriptionEditComponent,
      componentProps: {
        currentDescription: this.description,
      },
    });
  
    this.zone.run(async () => {
      await modal.present();
    });
  
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.description = data.editedDescription;
    }
  
    this.isEditDialogOpen = false;
  }
  
  
  saveDescription(editedDescription: string) {
    this.description = editedDescription;
    this.closeEditModal();
  }

  deleteDescription() {
    // Implement your delete logic here
    this.closeEditModal();
  }

  closeEditModal() {
    this.modalController.dismiss();
    this.isEditDialogOpen = false;
  }
}
