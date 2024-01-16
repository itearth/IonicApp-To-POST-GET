// description-edit.component.ts

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

  constructor() {}

  ngOnInit() {
    // Set the initial edited description to the current description
    this.editedDescription = this.currentDescription;
  }

  onEditSave() {
    // Update the description
    this.saveDescription.emit(this.editedDescription);
  }

  onDelete() {
    // Delete the description
    this.deleteDescription.emit();
  }

  closeModal() {
    // Close the modal
    this.editedDescription = ''; // Reset the edited description
  }
}
