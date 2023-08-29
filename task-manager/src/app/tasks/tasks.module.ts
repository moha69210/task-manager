import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { MainTaskComponent } from '../main-task/main-task.component';
import { FormatDatePipe } from '../format-date.pipe';

@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    FormatDatePipe
  ], 
  exports : [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    FormatDatePipe

  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
 