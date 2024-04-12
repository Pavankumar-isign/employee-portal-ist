import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-dailbox',
  templateUrl: './delete-dailbox.component.html',
  styleUrl: './delete-dailbox.component.scss'
})
export class DeleteDailboxComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDailboxComponent>) {}

  confirmDelete() {
    this.dialogRef.close(true); // Close the dialog with result 'true' (OK)
  }
  

  cancelDelete() {
    this.dialogRef.close(false); // Close the dialog with result 'false' (Cancel)
  }


}
