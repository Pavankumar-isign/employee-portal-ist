import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private dataservice: DataService) { }
  formdata: any = {};
  roleInvalid = false;
  formSubmitted = false;

  ngOnInit(): void {
    window.addEventListener('popstate', () => {
      // This function will be called when the back button is clicked
      this.handleBackButtonClick();
    });
    this.dataservice.logo = false;
  }

  handleBackButtonClick(): void {
    // Check if you are on the home page or not
    if (this.router.url !== '/') {
      // If not on the home page, navigate to the home page
      this.dataservice.login = !this.dataservice.login;
      this.router.navigateByUrl('/');
    } else {
      // Handle any additional logic or leave it empty
      console.log('Already on the home page');
    }
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (!this.formdata.selectedRole) {
      this.roleInvalid = true;
      return; // Don't proceed further if role is not selected
    }

    // Reset roleInvalid flag if role is selected
    this.roleInvalid = false;

    // Perform different actions based on the selected role
    if (this.formdata.selectedRole === 'admin') {
      this.http.post<any>('http://localhost:8081/adminLogin', this.formdata).subscribe(
        response => {
          console.log('Response from server:', response);
          alert("admin login successful");
          // Redirect to admin details page
          this.router.navigate(['/app-admin-home']);
          this.dataservice.logout = true;
         this.dataservice.logo=true;
         this.dataservice.userRes = null;
        },
        error => {
          console.log('Error:', error);
          alert("admin login failed");
        }
      );
    } else if (this.formdata.selectedRole === 'employee') {
      this.http.post<any>('http://localhost:8081/employeeLogin', this.formdata).subscribe(
        response => {
          console.log('Response from server:', response);
          this.dataservice.userRes = response.data;
          alert("employee login successful");
          // Redirect to employee details page
          this.router.navigate(['/app-employee-list']);
         
          this.dataservice.logo=true;
          this.dataservice.logout = true;
         
        },
        error => {
          console.log('Error:', error);
          alert("employee login failed");
        }
      );
    }
  }

  toggleLogout(){
    // Implement logout functionality
    this.dataservice.login = !this.dataservice.login;
    this.router.navigate(['']);
    
  }
}
