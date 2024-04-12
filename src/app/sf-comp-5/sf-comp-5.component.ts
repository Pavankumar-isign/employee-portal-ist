import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sf-comp',
  templateUrl: './sf-comp-5.component.html',
  styleUrls: ['./sf-comp-5.component.scss']
})

export class SfComp5Component implements OnInit {
  products: any;
  scrollAmount = 655;
  container: HTMLElement | null = null;
  maincont: HTMLElement | null = null;

  constructor(private http: HttpClient, private elementRef: ElementRef, private router: Router,private route: ActivatedRoute, private dataservice:DataService) {}

  ngOnInit() {
    
    this.route.params.subscribe((params) => {
      this.fetchData('name', 'asc');    
    }); // Default sorting by name in ascending order
  }


  fetchData(sortBy: string, sortOrder: string) {
    const apiUrl = `/assets/data/data-mb.json`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        // Sorting the data based on the specified field and order
        this.products = response.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return sortOrder === 'asc' ? -1 : 1;
          } else if (nameA > nameB) {
            return sortOrder === 'asc' ? 1 : -1;
          } else {
            return 0;
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }



  scrollCarousel(direction: number) {
    this.container = this.elementRef.nativeElement.querySelector('.cards');
    this.maincont = this.elementRef.nativeElement.querySelector('.carousel-wrapper');
    this.scrollAmount = this.maincont.clientWidth;
    console.log(this.scrollAmount);
    if (this.container) {
      this.container.scrollLeft += direction * this.scrollAmount;
    } else {
      console.error('Container does not exist');
    }
  }

  onCardClick(){
    this.router.navigate(['/app-employee-list']);
  }

  toggleLogin(){
    //this.loggedIn = !this.loggedIn;
    this.dataservice.login = !this.dataservice.login;
  }

  // Function to trigger sorting by name
  sortByName(order: 'asc' | 'desc') {
    this.fetchData('name', order);
  }

  onSortChange(event: any) {
    const selectedValue = event.target.value;

    const [sortBy, sortOrder] = selectedValue.split('-');

    if (sortBy && sortOrder) {
      switch (sortBy) {
        case 'name':
          this.sortByName(sortOrder);
          break;
        // Remove the case for 'price'
        default:
          // Handle default case if needed
      }
    }
  }
}

