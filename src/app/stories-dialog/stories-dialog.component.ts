import { Component } from '@angular/core';
import { ExitDailboxComponent } from '../exit-dailbox/exit-dailbox.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stories-dialog',
  templateUrl: './stories-dialog.component.html',
  styleUrl: './stories-dialog.component.scss'
})
export class StoriesDialogComponent {

  formData: any = {};
  fileData: File = null;
  employeesData: any[] = [];
  storyNameError: boolean = false;
  storyAssigneeNameError: boolean = false;
  storyDescriptionError: boolean = false;
  fileError: boolean = false;
  constructor(private http: HttpClient, private dialog: MatDialog) { }



  submitStoryForm(): void {

    if (!!this.formData.storyName) {
      this.storyNameError = false;
      if (!!this.formData.storyAssigneeName) {
        this.storyAssigneeNameError = false;
        if (!!this.formData.storyDescription) {
          this.storyDescriptionError = false;
          if (!!this.fileData) {
            this.fileError = false;

            const userData = this.formData;
            const formdata = new FormData();
            formdata.append('story', JSON.stringify(userData));
            formdata.append('file', this.fileData);

            this.http.post<any>('http://localhost:8081/saveStory', formdata).subscribe(
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
          this.storyDescriptionError = true;
          console.log("storyDescription is required...")
        }
      } else {
        this.storyAssigneeNameError = true;
        console.log("storyAssigneeName is required...")
      }
    } else {
      this.storyNameError = true;
      console.log("Storyname is required...");
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
    //   this.http.get('http://localhost:8081/getEmployeeList').subscribe((res:any)=>{
    //     this.storiesArray=res;
    //   })
    // }
}
