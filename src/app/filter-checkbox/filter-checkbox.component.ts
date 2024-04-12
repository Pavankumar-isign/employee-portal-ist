import { Component } from '@angular/core';



@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrl: './filter-checkbox.component.scss'
})
export class FilterCheckboxComponent {
 
  checkboxes: boolean[] = Array(10).fill(false);


  onCheckboxChange(checkboxNumber: number) {
    // Check if the checkbox is checked

    this.checkboxes[checkboxNumber - 1] = true;

    // Set all other checkboxes to false
    for (let i = 0; i < this.checkboxes.length; i++) {
      if (i !== checkboxNumber - 1) {
        this.checkboxes[i] = false;
      }
    }
    
  }

}
