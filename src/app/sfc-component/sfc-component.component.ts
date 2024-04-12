import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
  name: string;
  category: string;
}

@Component({
  selector: 'app-sfc-component',
  templateUrl: './sfc-component.component.html',
  styleUrl: './sfc-component.component.scss'
})
export class SfcComponentComponent {
  
  items: Item[] = [
    { name: 'Item 1', category: 'Category A' },
    { name: 'Item 2', category: 'Category B' },
    { name: 'Item 3', category: 'Category A' },
    { name: 'Item 4', category: 'Category C' }
  ];
 userInfo: any[]=[];

 filteredUsers: any ;
 filterValue: string ='';

 constructor(private http: HttpClient){}

 public ngOnInit() : void {
  const url : string = './assets/data.json';
  this.http.get<any>(url).subscribe(data => {
    this.userInfo = data;
    this.filteredUsers = this.userInfo;
   
  });

}
// Dropdown box
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
          // Handle default case
          break;
  }
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
filteredItems: Item[] = [];
searchTerm: string = '';
filterItems() {
  this.filteredItems = this.items.filter(item =>
    item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
images = [
'./assets/images/luffy.jpg',
'./assets/images/zoro.png',
'./assets/images/levi.jpg'
];
currentIndex: number = 0;
nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}
prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}
interval = 500;
      // filter 
      getUniqueColors(): string[] {
        // Get unique colors from user data
        return Array.from(new Set(this.userInfo.map(user => user.colour)));
      }
      selectedColors: { [key: string]: boolean } = {}; // Object to track selected colors
  toggleColor(color: string) {
      // Toggle the selected state of the color
      this.selectedColors[color] = !this.selectedColors[color];
      // Implement filtering logic based on selectedColors object
      this.applyColorFilters();
  }
  showOutput = true;
  applyColorFilters() {
        this.showOutput =false;
      // Implement filtering logic based on selected colors
      if (Object.values(this.selectedColors).every(selected => !selected)) {
          // No colors selected, display all items
          console.log('Displaying all items');
          this.filteredItems = this.userInfo;
          return  this.filteredItems;
      }
      // Filter items based on selected colors
      console.log('Filtering items by colors:', this.selectedColors);
      this.filteredItems = this.userInfo.filter(item =>
          Object.keys(this.selectedColors).every(colour =>
              !this.selectedColors[colour] || item.colour === colour
          )
      );
      console.log('Filtered items:', this.filteredItems);
  }



}
