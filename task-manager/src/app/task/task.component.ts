import { Component, Input } from '@angular/core';
import { State } from '../state';
import { Task } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Array<Task> = new Array<Task>();
}
