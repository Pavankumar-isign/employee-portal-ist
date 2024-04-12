import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort-sagar',
  templateUrl: './sort-sagar.component.html',
  styleUrl: './sort-sagar.component.scss'
})
export class SortSagarComponent implements OnInit{
  userInfo: any[]=[]; 
  filteredUsers: any;
  filterValue: string ='';

  constructor(private http: HttpClient){}

  public ngOnInit() : void {
   const url : string = '/assets/data.json';
   this.http.get<any>(url).subscribe(data => {
     this.userInfo = data;
     this.filteredUsers = this.userInfo;
   });

 }


 applyFilter() {
   if (!this.filterValue) {
     this.filteredUsers = this.userInfo;
   } else {
     const filterLowerCase = this.filterValue.toLowerCase();
     this.filteredUsers = this.userInfo.filter(user => {
       return user.name.toLowerCase().includes(filterLowerCase);
     });
   }
 }


 sort(property: string) {
   this.filteredUsers.sort((a, b) => {
     return a[property] - b[property];//sorting in ascending order
   });
 }

 sort1(property: string) {
   this.filteredUsers.sort((a, b) => {
     return b[property] - a[property]; // Sorting in descending order
   });
 }

 sortByName(order: 'asc' | 'desc') {
   this.filteredUsers.sort((a, b) => {
     const nameA = a.name.toLowerCase();
     const nameB = b.name.toLowerCase();

     if (order === 'asc') {
       if (nameA < nameB) return -1;
       if (nameA > nameB) return 1;
     } 
     else if (order === 'desc') {
       if (nameA > nameB) return -1;
       if (nameA < nameB) return 1;
     }

     return 0;
   });
 }
 }
