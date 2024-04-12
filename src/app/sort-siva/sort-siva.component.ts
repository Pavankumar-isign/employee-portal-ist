import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  colour: string;
  price : number;
}
@Component({
  selector: 'app-sort-siva',
  templateUrl: './sort-siva.component.html',
  styleUrl: './sort-siva.component.scss'
})
export class SortSivaComponent {


  
  showOutput :boolean = true;

 userInfo: any[]=[];

 filteredUsers: any ;
 filterValue: string ='';
 filteredItem:any ;


 constructor(private http: HttpClient){

  //Iterate the colours
  this.userInfo.forEach(color => {
    this.selectedColors[color] = false;
});

 }

//Get data
 public ngOnInit() : void {
  const url : string = '/assets/data/data-siva.json';
  this.http.get<any>(url).subscribe(data => {
    this.userInfo = data;
    this.filteredUsers = this.userInfo;
  });

}


// applyFilter() {

//   if (!this.filterValue) {
//     this.filteredUsers = this.userInfo;
//   } 
//   else {
//     const filterLowerCase = this.filterValue.toLowerCase();
//     this.filteredUsers = this.userInfo.filter(user => {
//       return user.name.toLowerCase().includes(filterLowerCase);
//     });
//   }
// }

// Sorting
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

      
      // filter 
      getUniqueColors(): string[] {
        // Get unique colors from user data
        return Array.from(new Set(this.userInfo.map(user => user.colour)));
      }
      
      selectedColors: { [key: string]: boolean } = {}; // Object to track selected colors
      filteredItems: any[] = []; // Array to store filtered items

     toggleColor(color: string) {
      // Toggle the selected state of the color
      this.selectedColors[color] = !this.selectedColors[color];

      // Implement filtering logic based on selectedColors object
      this.applyColorFilters();
  }


  applyColorFilters() {
        this.showOutput =false;
      // Implement filtering logic based on selected colors
      if (Object.values(this.selectedColors).every(selected => !selected)) {
          // No colors selected, display all items
          this.filteredItems = this.userInfo;
      }
     else{
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

}
