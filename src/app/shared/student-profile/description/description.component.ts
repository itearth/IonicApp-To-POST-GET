import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { DescriptionEditComponent } from '../description-edit/description-edit.component';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  description: string = "Loading...";
  isEditDialogOpen = false;
  userId = 1552;

  constructor(
    private modalController: ModalController,
    private zone: NgZone,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    this.authService.getUserProfile(this.userId).subscribe(
      (response) => {
        if (response && response.data && response.data.length > 0) {
          const userProfile = response.data[0];

          if (userProfile.description) {
            this.description = userProfile.description;
          } else {
            console.warn('User profile has no description.');
          }
        } else {
          console.warn('No user profile data found in the API response.');
        }
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

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

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data && data.editedDescription !== undefined) {
      this.description = data.editedDescription;
      this.updateUserProfile(); // Update the user profile after editing
    }

    this.isEditDialogOpen = false;
  }

  updateUserProfile() {
    this.authService.updateUserProfileDescription(this.userId, this.description).subscribe(
      (response) => {
        console.log('User profile description updated successfully:', response);
      },
      (error) => {
        console.error('Error updating user profile description:', error);
      }
    );
  }

  saveDescription(editedDescription: string) {
    this.description = editedDescription;
    this.closeEditModal();
  }

  deleteDescription() {
    // Implement your delete logic here
    this.description = ''; // Optional: Clear the description after deletion
    this.updateUserProfile(); // Update the user profile after deletion
    this.closeEditModal();
  }

  closeEditModal() {
    this.modalController.dismiss();
    this.isEditDialogOpen = false;
  }
}






