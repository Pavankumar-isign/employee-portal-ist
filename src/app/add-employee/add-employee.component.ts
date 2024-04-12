import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailCheckService } from '../email-check.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  loginError: string | undefined;
  data: File = null;
  myForm: FormGroup;
  successMessage:string | null=null;
  emailExists:boolean;
  errorMessage:string;
  constructor(private http: HttpClient, private router: Router ,private checkEmail:EmailCheckService, private dataService : DataService,private route : ActivatedRoute) {}

  formData: any = {};
  onFileSelected(event: any): void {
    this.data = event.target.files[0];
  }
  onSubmit() {
    if (!this.formData.email || !this.formData.email.includes('@isigntech.com')) {
      this.formData.emailError = true;
      return; 
    }
    const employeeData=this.formData;
    const formdata=new FormData();
    formdata.append('employeeData',JSON.stringify(employeeData));
    formdata.append('file',this.data);
    this.checkEmail.checkEmailExists(this.formData.email).subscribe(
      (exists: boolean) => {
        this.emailExists = exists;
        if (exists) {
          this.errorMessage = 'Email already exists in the database.';
        } else {
          this.http.post<any>('http://localhost:8081/saveEmployee',formdata)
          .subscribe(
            (result) => {
              console.log('Response from server', result)
              this.successMessage='Employee added sucesfully';
              this.router.navigate(['/app-employee-list'])
            },
            (error) => {
              console.log('Error', error);
              this.loginError = 'Adding Employee failed'
              this.formData.email={};
            }
          )
        }
      },
      (error) => {
        console.error('Error checking email:', error);
        this.errorMessage = 'Error checking email. Please try again later.';
        this.formData={};
      }
    );
  } 


//siva

  
selectempId :any ;


ngOnInit(): void {

 this.route.paramMap.subscribe(params => {
   this.selectempId = params.get('data');
   console.log(this.selectempId);
 });
 this.getDataFromService();
 console.log(this.selectempId);
}

updatedata :any;

getDataFromService(): void {
 this.dataService.getDataEmployeeId(this.selectempId).subscribe(data => {
   console.log('Received data:');
   this.updatedata = data; // Storing received data in the array
   console.log(this.updatedata);
 });
 this.updatedata = this.data;
 alert(this.data);
}




} 