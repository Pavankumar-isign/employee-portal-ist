import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sf-udhay',
  templateUrl: './sf-udhay.component.html',
  styleUrl: './sf-udhay.component.scss'
})

export class SfUdhayComponent implements OnInit {
  userInfo: any[] = [];
  filteredUsers: any;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    const url: string = '/assets/data/data-udhay.json';
    this.http.get<any>(url).subscribe(data => {
      this.userInfo = data;
      this.filteredUsers = this.userInfo;
    });

  }


  sort(property: string) {
    this.filteredUsers.sort((a, b) => {
      return a[property] - b[property];
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

  sortSelection(value: string) {
    switch (value) {
      case 'id':
        this.sort('id');
        break;
      case 'priceAsc':
        this.sort('price');
        break;
      case 'priceDesc':
        this.sort1('price');
        break;
      case 'nameAsc':
        this.sortByName('asc');
        break;
      case 'nameDesc':
        this.sortByName('desc');
        break;
      default:
        // Handle default case
        break;
    }
  }
}
