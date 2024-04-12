import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit-dailbox',
  templateUrl: './exit-dailbox.component.html',
  styleUrl: './exit-dailbox.component.scss'
})
export class ExitDailboxComponent {

  constructor(public dialogRef: MatDialogRef<ExitDailboxComponent> ,public router: Router) {}
  
  Admin() {
     this.router.navigate(['/app-admin-home']);
    this.dialogRef.close(true); // Close the dialog with result 'true' (OK)
  }

  cancel() {
    this.dialogRef.close(false); // Close the dialog with result 'false' (Cancel)
  }

}
