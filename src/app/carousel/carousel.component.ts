import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent {
  images = [
    {name:'https://wordpresscarousel.com/wp-content/uploads/2022/08/robot-handshake-human-background-futuristic-digital-age-min.jpg'  },
    {name:  'https://wordpresscarousel.com/wp-content/uploads/2022/08/cute-freelance-girl-using-laptop-sitting-floor-smiling-min.jpg',  },
    {name:  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
    
    ];
}
