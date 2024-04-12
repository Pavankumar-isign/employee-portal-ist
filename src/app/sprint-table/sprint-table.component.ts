import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StoriesDialogComponent } from '../stories-dialog/stories-dialog.component';
import { TaskFormComponent } from './task-form/task-form.component';
@Component({
  selector: 'app-sprint-table',
  templateUrl: './sprint-table.component.html',
  styleUrl: './sprint-table.component.scss'
})
export class SprintTableComponent implements OnInit{

  title= 'ss-dialog';
  employeesData:any[]=[];
  taskData:any[]=[];
  taskDataNone:any[]=[];
  taskDataProgress:any[]=[];
  taskDataDone:any[]=[];
  taskDataAccepted:any[]=[];
  constructor(private matDialogcc: MatDialog,private http:HttpClient) { }
  openDialogStory(){
    const dialogueRef=this.matDialogcc.open(StoriesDialogComponent,{})
    dialogueRef.afterClosed().subscribe((result)=>{
      setTimeout(()=>{
        this.getStories();
      },500);
     

    })
  }
  
  ngOnInit(): void {
    this.getStories();
    this.getTasks();
  }
  getStories():void{
    this.http.get<any[]>('http://localhost:8081/stories').subscribe(
      (responce)=>{
        this.employeesData=responce;
        console.log('Story data fetched...')
      },
      (error)=>{
        console.log('Unable to fetch Story data...')
      }
    );
  }
  openDialogTask(){
    const dialogueRef=this.matDialogcc.open(TaskFormComponent,{})
    dialogueRef.afterClosed().subscribe((result)=>{
      setTimeout(()=>{
        this.getTasks();
      },1000);
     

    })
  }
  getTasks():void{
    this.http.get<any[]>('http://localhost:8081/allTasks').subscribe(
      (responce)=>{
        this.taskData=responce;
        console.log(this.taskData.length+":"+this.taskData);
        this.taskDataNone=[];
        this.taskDataProgress=[];
        this.taskDataDone=[];
        this.taskDataAccepted=[];
        for (const employee of this.taskData) {
          switch (employee.status) {
            case 'NONE':
              this.taskDataNone.push(employee);
              break;
              case 'INPROGRESS':
                  this.taskDataProgress.push(employee);
                  break;
              case 'DONE':
                  this.taskDataDone.push(employee);
                  break;
              case 'ACCEPTED':
                  this.taskDataAccepted.push(employee);
                  break;
          }
      }
        console.log('Story data fetched...')
      },
      (error)=>{
        console.log('Unable to fetch Story data...')
      }
    );
  }

  transferToProgress(child:any,parent:string)
  {
      const index = this[parent].indexOf(child);

      if(index !== -1 )
      {
          this[parent].splice(index,1);
          this.taskDataProgress.push(child);
      }
  }
  transferToDone(child:any,parent:string)
  {
      const index = this[parent].indexOf(child);

      if(index !== -1 )
      {
          this[parent].splice(index,1);
          this.taskDataDone.push(child);
      }
  }
  transferToAccepted(child:any,parent:string)
  {
      const index = this[parent].indexOf(child);

      if(index !== -1 )
      {
          this[parent].splice(index,1);
          this.taskDataAccepted.push(child);
      }
  }
  inProgress(task:any){
    if(task.status==='NONE'){
      task.status = 'INPROGRESS';
      // const lastIndex = this.taskDataProgress.length - 1;
      // this.taskDataProgress[lastIndex].status ='INPROGRESS';
     
    }else if(task.status==='INPROGRESS'){
      task.status = 'DONE';
    }else if(task.status==='DONE'){
      task.status = 'ACCEPTED';
    }
      this.http.put<any>('http://localhost:8081/updateTaskStatus', task).subscribe(
              (response) => {
                console.log('Response from server', response);
              },
              (error) => {
                console.log('Error', error);
              }
            )
    
  }
}
