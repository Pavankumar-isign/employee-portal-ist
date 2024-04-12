import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
  
  constructor(private http: HttpClient,public dataservice:DataService, private router:Router){}

  ngOnInit():void{
    
    
  }
 
   getImageUrl(user: any): string {
   
     return 'data:image/png;base64,' + user.image;
   }

  toggleLogin(){
    //this.loggedIn = !this.loggedIn;
    this.dataservice.login = !this.dataservice.login;
  }
  
  
  toggleLogout(){
    // Implement logout functionality
    this.dataservice.login = !this.dataservice.login;
    this.router.navigate(['']);
    
  }

}
