import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-search-shubam',
  templateUrl: './sort-search-shubam.component.html',
  styleUrl: './sort-search-shubam.component.scss'
})
export class SortSearchShubamComponent implements OnInit{

  userInfo: any[]=[];
  filteredUsers:any;
  //searchText: string = '';
  constructor(private http: HttpClient){}

  ngOnInit():void{
    const url : string = 'assets/data/shop-data.json';
    this.http.get<any>(url).subscribe(data => {
      this.userInfo = data;
     this.filteredUsers = this.userInfo;
    });
//fiter methods~~  
  }
  filterColor(color: string): void {
    this.userInfo = this.userInfo.filter(item => item.color === color);
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
  switch(value) {
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
          break;
  }
}

//Fiter by Color
// filterColor(color: string): void {
//    const colorList = this.products.slice().filter((item : IProduct) => item.category == color )


}