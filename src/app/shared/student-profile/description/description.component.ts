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
  userId: number | null = null;

  constructor(
    private modalController: ModalController,
    private zone: NgZone,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    console.log('DescriptionComponent initialized');
    this.loadUserProfile();
  }

  async loadUserProfile() {
    console.log('Loading user profile...');
    console.log('User ID:', this.userId);
    this.userId = this.authService.getLoggedInUserId();
  
    if (this.userId !== null) { 
      this.authService.getUserProfile(this.userId).subscribe(
        (response) => {
          if (response && response.data && response.data.length > 0) {
            const userProfile = response.data[0];
            this.description = userProfile.description;
          }
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
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
    if (this.userId !== null) {
      this.authService.updateUserProfileDescription(this.userId, this.description).subscribe(
        (response) => {
          console.log('User profile description updated successfully:', response);
        },
        (error) => {
          console.error('Error updating user profile description:', error);
        }
      );
    } else {
      console.error('userId is null. Cannot update user profile description.');
    }
  }

  saveDescription(editedDescription: string) {
    this.description = editedDescription;
    this.updateUserProfile();
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






