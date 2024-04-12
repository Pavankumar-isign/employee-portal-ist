import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ExitDailboxComponent } from '../exit-dailbox/exit-dailbox.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { DailboxComponent } from '../dailbox/dailbox.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {


  isContentRoute: boolean = false;

  public constructor(private http: HttpClient, private router: Router,public dialog: MatDialog,public dataService : DataService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isContentRoute = (event.url === '/add-employee'|| event.url === '/app-delete-form'   || event.url === '/app-employee-list' || event.url === '/add-employee' || event.url ==='/task-form'  );
    });
  }
                                        
  openDialogExit(): void {
    this.dialog.open(ExitDailboxComponent, {
      width: '400px',
      height : '200px',
    });
  }
  
  openDialogUpdate(): void {
    this.dataService.getAllEmployeeIds().subscribe(ids => {
      const dialogRef = this.dialog.open(DailboxComponent, {
        data: { ids: ids }, // Pass the fetched IDs to the dialog
        width : "400px",
        height : "300px"
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }
}

