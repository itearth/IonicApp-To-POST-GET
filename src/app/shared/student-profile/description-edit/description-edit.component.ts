import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-description-edit',
  templateUrl: './description-edit.component.html',
  styleUrls: ['./description-edit.component.scss'],
})
export class DescriptionEditComponent {
  @Input() currentDescription: string = '';
  @Output() saveDescription = new EventEmitter<string>();
  @Output() deleteDescription = new EventEmitter<void>();

  editedDescription: string = '';
  modalController: any;

  constructor() {}

  onEditSave() {
    // Update the description
    this.saveDescription.emit(this.editedDescription);
    this.closeModal();
  }

  onDelete() {
    // Delete the description
    this.deleteDescription.emit();
    this.closeModal();
  }
  closeModal() {
    // Close the modal
    this.modalController.dismiss({
      editedDescription: this.editedDescription,
    });
}

}