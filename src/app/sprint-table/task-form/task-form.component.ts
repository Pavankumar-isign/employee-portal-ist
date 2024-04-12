import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ExitDailboxComponent } from '../../exit-dailbox/exit-dailbox.component';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',  
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit{
  
  formData: any = {};
  fileData: File = null;
  employeesData: any[] = [];
  storiesData: any[] = [];
  taskNameError: boolean = false;
  storyIdError:boolean=false;
  assigneeNameError: boolean = false;
  descriptionError: boolean = false;
  fileError: boolean = false;
  constructor(private http: HttpClient, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.fetchEmployeesFromBackend();
    this.fetchStoriesFromBackend();
  }

  submitStoryForm(): void {

    if (!!this.formData.taskName) {
      this.taskNameError = false;
      if(this.formData.storyId){
        this.storyIdError=false;
      if (!!this.formData.assigneeName) {
        this.assigneeNameError = false;
        if (!!this.formData.description) {
          this.descriptionError = false;
          if (!!this.fileData) {
            this.fileError = false;

            const userData = this.formData;
            const formdata = new FormData();
            formdata.append('task', JSON.stringify(userData));
            formdata.append('file', this.fileData);
            formdata.append('storyId',this.formData.storyId);

            this.http.post<any>('http://localhost:8081/saveTask', formdata).subscribe(
              (response) => {
                console.log('Response from server', response);
              },
              (error) => {
                console.log('Error', error);
              }
            )
            this.dialog.closeAll();
          } else {
            this.fileError = true;
            console.log("File is required")
          }
        } else {
          this.descriptionError = true;
          console.log("TaskDescription is required...")
        }
      } else {
        this.assigneeNameError = true;
        console.log("AssigneeName is required...")
      }
    }else{
      this.storyIdError=true;
      console.log("StoryId is required...");

    }
    } else {
      this.taskNameError = true;
      console.log("Taskname is required...");
    }
  }


  handleFileInput(event: any): void {
    this.fileData = event.target.files[0];
  }
  isFormValid(): boolean {
    // Check if all required fields are filled
    return !!this.formData.storyName && !!this.formData.storyAssigneeName && !!this.formData.storyDescription && !!this.fileData;
  }

  openDialogz(): void {
    this.dialog.open(ExitDailboxComponent, {
      width: '400px',
      height : '200px',
    });
  }
  fetchEmployeesFromBackend(): any {
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
  fetchStoriesFromBackend():any{
    this.http.get<any[]>('http://localhost:8081/stories').subscribe(
      (data) => {
        this.storiesData = data; 
        console.log('Data has been fetched:', data);
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }

  closepopup(){
    this.dialog.closeAll();
  }
 

// sformData={
//   storyName:'',
//   assigneeName:'',
//   sDescription:'',
//   sfiles:'',

// }
// submitStoryForm(){
//   console.log('submitted Form', this.sformData);
// }


    //to Get the Story Data
    // storiesArray: any[]=[];
    
    // ngOnInit(): void {
    //   this.getStoryData();
    // }

    // getStoryData(){
    //   this.http.get("").subscribe((res:any)=>{
    //     this.storiesArray=res;
    //   })
    // }

}
