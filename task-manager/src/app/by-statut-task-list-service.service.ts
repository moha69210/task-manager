// by-statut-task-list.service.ts
import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { CRUDTaskListService } from './crud-task-list-service.service';



@Injectable({
  providedIn: 'root',
})
export class ByStatutTaskListService extends CRUDTaskListService {
  getTasksByStatut(statut: string): Task[] {
    return this.readTasks().filter((task) => task.statut === statut);
  }
}
