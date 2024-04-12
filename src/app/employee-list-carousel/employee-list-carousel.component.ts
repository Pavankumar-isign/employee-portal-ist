import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list-carousel',
  templateUrl: './employee-list-carousel.component.html',
  styleUrl: './employee-list-carousel.component.scss'
})
export class EmployeeListCarouselComponent implements OnInit {
  cardsData: any[] = [];
  
  employees: any[] = [];

  employeeOfTheMonth: any = {
    name: 'Udhay Kumar Reddy Medam',
    department: 'Full Stack Developer'
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/data.json').subscribe(data => {
      this.employees = data;
    });
    this.http.get<any[]>('/assets/data/data-udhay-carousal.json').subscribe(data => {
      this.cardsData = data;
    });
  }

  // ngOnInit(): void {
  
  // }
}