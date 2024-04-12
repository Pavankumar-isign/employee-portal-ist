import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-task-employee',
  templateUrl: './add-task-employee.component.html',
  styleUrl: './add-task-employee.component.scss'
})
export class AddTaskEmployeeComponent {
  formData: any = {};
  data: any = null;
  employeesData: any[]=[];
  successMessage:string | null=null;
  failureMessage:string | null=null;

  @ViewChild('fileInput') fileInput: ElementRef;



  constructor(private http: HttpClient) { }
  onFileSelected(event: any): void {
    this.data = event.target.files[0] ;
  }
  submitForm() {
   
    const formData = new FormData();
    formData.append('employeeTask',JSON.stringify(this.formData))
    formData.append('employeeId',this.formData.employeeId)
    formData.append('file', this.data);

    this.http.post<any>('http://localhost:8081/addTaskToEmployee', formData)
    
      .subscribe(
        response => {
          console.log('Data sent successfully:', response);
          // Handle success, reset form, show success message, etc.
          this.successMessage='Task sent succesfull';
          this.formData={};
          if (this.fileInput) {
            this.fileInput.nativeElement.value = null;
          }
          setTimeout(() => {
            this.successMessage=null;
          },30000);
         
        },
        error => {
          console.error('Error sending data:', error);
          // Handle error, show error message, etc.
          this.failureMessage='failed to send enter valid input !';
         
          setTimeout(() => {
            this.failureMessage=null;
          },9000);
         
        }
      );
  }
  fetchDataFromBackend(): any {
    this.http.get<any[]>('http://localhost:8081/getEmployeeList').subscribe(
      (data) => {
        this.employeesData = data; 
        console.log('Data has been fetched:', data);
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }
}
