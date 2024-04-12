import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit{

  // faList = faAddressCard;
  usersArray: any[]=[];

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit():void{
    this.getUsers();
  }
getUsers(){
   this.http.get('http://localhost:8081/getEmployeeList').subscribe((res:any)=>{
    this.usersArray= res;
    })
  }
  getImageUrl(employee: any): string {
    return 'data:image/png;base64,' + employee.image;
  }

  onSubmit(user: any) {
    // Navigate to the employeeTask route along with the user object
    this.router.navigate(['/app-employee-tasks'], { queryParams:{ user: JSON.stringify(user.employeeTask) }});
    // console.log(user.employeeTask);
  }
}
