import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddTaskEmployeeComponent } from './add-task-employee/add-task-employee.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { MainComponent } from './main/main.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SfComp5Component } from './sf-comp-5/sf-comp-5.component';
import { SortSearchShubamComponent } from './sort-search-shubam/sort-search-shubam.component';
import { SortFilterPavanComponent } from './sort-filter-pavan/sort-filter-pavan.component';
import { SortFilterRohitComponent } from './sort-filter-rohit/sort-filter-rohit.component';
import { FilterCheckboxComponent } from './filter-checkbox/filter-checkbox.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SfUdhayComponent } from './sf-udhay/sf-udhay.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { ExitDailboxComponent } from './exit-dailbox/exit-dailbox.component';
import { DeleteDailboxComponent } from './delete-dailbox/delete-dailbox.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { SprintUdhayComponent } from './sprint-udhay/sprint-udhay.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { DailboxComponent } from './dailbox/dailbox.component';
import { MatSelectModule } from '@angular/material/select';
import { StoriesDialogComponent } from './stories-dialog/stories-dialog.component';
import { SprintTableComponent } from './sprint-table/sprint-table.component';
import { TaskFormComponent } from './sprint-table/task-form/task-form.component';
import { ButtonComponent } from './button/button.component';
import { EmployeeListCarouselComponent } from './employee-list-carousel/employee-list-carousel.component';
import { SfcComponentComponent } from './sfc-component/sfc-component.component';
import { SortSivaComponent } from './sort-siva/sort-siva.component';
import { SfCharanComponent } from './sf-charan/sf-charan.component';
import { SortingFilteringMaheshComponent } from './sorting-filtering-mahesh/sorting-filtering-mahesh.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortSagarComponent } from './sort-sagar/sort-sagar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponentComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    AddTaskEmployeeComponent,
    EmployeeTasksComponent,
    MainComponent,
    LoginFormComponent,
    SfComp5Component,
    SortSearchShubamComponent,
    SortFilterPavanComponent,
    SortFilterRohitComponent,
    FilterCheckboxComponent,
    CarouselComponent,
    SfUdhayComponent,
    SortSivaComponent,
    SortSagarComponent,
    AdminHomeComponent,
    UpdateEmployeComponent,
    DeleteDailboxComponent,
    ExitDailboxComponent,
    DeleteFormComponent,
    SprintUdhayComponent,
    StoryBoardComponent,
    DailboxComponent,
    SprintTableComponent,
    StoriesDialogComponent,
    TaskFormComponent,
    ExitDailboxComponent,
    ButtonComponent,
    EmployeeListCarouselComponent,
    SfcComponentComponent,
    SfCharanComponent,
    SortingFilteringMaheshComponent,
    FilterPipe

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatSelectModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }