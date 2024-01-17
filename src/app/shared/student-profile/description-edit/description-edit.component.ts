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
    this.editedDescription = this.currentDescription;
  }

  onEditSave() {
    this.saveDescription.emit(this.editedDescription);
  }

  onDelete() {
    this.deleteDescription.emit();
  }

  closeModal() {
    this.editedDescription = '';
  }
}
