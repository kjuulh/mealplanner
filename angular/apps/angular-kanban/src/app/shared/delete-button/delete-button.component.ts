import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {
  canDelete: boolean;

  @Output() delete = new EventEmitter<boolean>();

  constructor() {}

  prepareForDelete() {
    this.canDelete = true;
  }

  cancel() {
    this.canDelete = false;
  }

  deleteBoard() {
    this.delete.emit(true);
    this.canDelete = false;
  }
}
