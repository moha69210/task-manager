import { Component } from '@angular/core';
import { Task } from '../model/task';
import { State } from '../state';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {
  task: Array<Task> = new Array<Task>();

  constructor() {
    this.task.push({
      titre: 'Manger',
      description: 'Riz',
      etat: State.EN_COURS,
    });

    this.task.push({
      titre: 'Manger',
      description: 'Pâtes',
      etat: State.EN_COURS,
    });
  }
}
