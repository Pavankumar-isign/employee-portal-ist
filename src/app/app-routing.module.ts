import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
// import { ErrorComponentComponent } from './error-component/error-component.component';
import { SfComp5Component } from './sf-comp-5/sf-comp-5.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SortFilterPavanComponent } from './sort-filter-pavan/sort-filter-pavan.component';
import { SortFilterRohitComponent } from './sort-filter-rohit/sort-filter-rohit.component';
import { SortSearchShubamComponent } from './sort-search-shubam/sort-search-shubam.component';
import { FilterCheckboxComponent } from './filter-checkbox/filter-checkbox.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; 
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SfUdhayComponent } from './sf-udhay/sf-udhay.component';
import { SprintUdhayComponent } from './sprint-udhay/sprint-udhay.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AddTaskEmployeeComponent } from './add-task-employee/add-task-employee.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { SprintTableComponent } from './sprint-table/sprint-table.component';
import { TaskFormComponent } from './sprint-table/task-form/task-form.component';



const routes: Routes = [
 
  {path:'app-sf-comp', component:SfComp5Component},
  {path:'app-filter-checkbox', component:FilterCheckboxComponent},
  {path:'app-login-form', component:LoginFormComponent},
  {path:'app-sort-filter-pavan', component:SortFilterPavanComponent},
  {path:'app-sort-filter-rohit', component:SortFilterRohitComponent},
  {path:'app-sort-search-shubam', component:SortSearchShubamComponent},
  {path: 'app-main', component: MainComponent },
  {path:'app-admin-home', component:AdminHomeComponent},
  // {path:'app-header', component:HeaderComponent},
  // {path:'app-footer', component:FooterComponent},
  { path:'add-employee', component: AddEmployeeComponent},
  { path:'app-employee-list', component: EmployeeListComponent},
  { path :'app-delete-form', component: DeleteFormComponent},
  { path:'app-sf-udhay', component:SfUdhayComponent},
  // { path:'app-sprint-udhay', component:SprintUdhayComponent},
  // { path : 'app-update-employee-form', component: UpdateEmployeComponent },
  { path : 'app-story-board', component: StoryBoardComponent },
  { path : 'task-form' , component : AddTaskEmployeeComponent },
 {path: 'app-employee-tasks', component: EmployeeTasksComponent},
 {path: 'app-sprint-table', component: SprintTableComponent},
 {path:'app-task-form', component:TaskFormComponent}



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
