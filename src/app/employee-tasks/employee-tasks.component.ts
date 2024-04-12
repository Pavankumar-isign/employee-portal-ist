import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrl: './employee-tasks.component.scss'
})
export class EmployeeTasksComponent implements OnInit{
  // faList = faAddressCard;
  usersArray: any[]=[];

  constructor(private http: HttpClient, private router:ActivatedRoute,private sanitizer: DomSanitizer){}

  ngOnInit():void{

    console.log(this.usersArray );
    this.router.queryParams.subscribe(params => {

        this.usersArray = JSON.parse(params.user);
      
    });
  }
  getPdfUrl(employee: any): SafeResourceUrl {
    const url = 'data:application/pdf;base64,' + employee.fileContent;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
