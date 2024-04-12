import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';


interface DialogData {
  ids: any;
}

@Component({
  selector: 'app-dailbox',
  templateUrl: './dailbox.component.html',
  styleUrl: './dailbox.component.scss'
})
export class DailboxComponent {
  

  

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData ,private dataService : DataService,private router : Router, private dialogRef :DialogRef) { }  

  selectedEmployeeId: number ;
   
  //get the all data
  openEmployeeDetailsConfirm(selectedEmployeeId: number): void {
    
    this.router.navigate(['/add-employee', {data : selectedEmployeeId}  ]);

    this.dialogRef.close(true); // Close the dialog with result 'false' (Cancel)

  }

  cancelDelete() {
    this.dialogRef.close(false); // Close the dialog with result 'false' (Cancel)
  }




  // confirmDelete() {
  //   // console.log(this.data)
  //   this.dialogRef.close(true);   // Close the dialog with result 'true' (OK)
  // }
  
  // cancelDelete() {
  //   this.dialogRef.close(false);   // Close the dialog with result 'false' (Cancel)
  //   // console.log(this.data)
  //   this.router.navigate(['/']);

  // }



}
