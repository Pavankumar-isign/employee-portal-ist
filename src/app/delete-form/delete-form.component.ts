import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { DeleteDailboxComponent } from '../delete-dailbox/delete-dailbox.component';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrl: './delete-form.component.scss'
})
export class DeleteFormComponent implements OnInit {



  
  selectedEmployeeId: number;
  ids : any;
  
  constructor(private dataService : DataService,public dialog: MatDialog,private http:HttpClient ) {   
    }
    
    ngOnInit(): void {
      this.fetchDatabaseIds();
        
    }
    
    fetchDatabaseIds(): void {
      this.dataService.getAllEmployeeIds().subscribe(
        (ids) => {
          this.ids = ids;
        },
        (error) => {
          console.error('Error fetching database IDs:', error);
        }
      );
    }
    


   // delete data
    onDelete(): void {
      console.log(" delete form...... ")
    this.dataService.deleteResourceById( this.selectedEmployeeId ).subscribe(
      () => {
        alert("Resource deleted successfully!");
      },
      (error) => {
      console.log("Error deleting resource:", error);
          }
    );

  }

  //dialog box 
openDialog(): void {
  const dialogRef = this.dialog.open(DeleteDailboxComponent, {
    width: '400px',
    height : '200px',
  });
  
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Call the delete method here
      this.onDelete();
    }
  });


}
  
 
}

