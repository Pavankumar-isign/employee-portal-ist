import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sort-filter-rohit',
  templateUrl: './sort-filter-rohit.component.html',
  styleUrl: './sort-filter-rohit.component.scss'
})
export class SortFilterRohitComponent {
  data: any[] = [];
  sortedBy: string = '';
  sortOrder: string = 'asc';
  filteredData: any[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();

  }

  loadData(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.filteredData = this.data;
    });
  }
// sorting asc
  sortByasc(key: string): void {
    if (this.sortedBy === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedBy = key;
      this.sortOrder = 'asc';
    }

    this.data.sort((a, b) => {
      if (a[key] < b[key]) {
        return this.sortOrder === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }
  // sorting desc
  sortBydesc(key: string): void {
    if (this.sortedBy === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedBy = key;
      this.sortOrder = 'asc';
    }

    this.data.sort((a, b) => {

      if (a[key] > b[key]) {
        return this.sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  // filtering
  filterData(searchTerm: string) {
    this.filteredData = this.data.filter(item =>
      Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}
