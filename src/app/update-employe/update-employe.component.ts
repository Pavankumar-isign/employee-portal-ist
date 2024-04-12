import { Component } from '@angular/core';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrl: './update-employe.component.scss'
})
export class UpdateEmployeComponent {

  formData={
    fName:'',
    lName:'',
    eId:'',
    email:'',
    mobile:'',
    salary:'',
    designation:'',
    password:'',
    address:'',

  }
  submitForm(){
    console.log('submitted Form', this.formData);
  }
    

}
