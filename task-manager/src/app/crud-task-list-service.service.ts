import { Injectable } from '@angular/core';
import { Task } from './model/task';


@Injectable({
  providedIn: 'root',
})
export class CRUDTaskListService {
  private tasks: Task[] = [];

  createTask(task: Task): void {
    this.tasks.push(task);
  }

  readTasks(): Task[] {
    return this.tasks;
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskToDelete: Task): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskToDelete.id);
  }
}