import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './main-task/main-task.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {
    path: 'hello', component: HelloWorldComponent
  },
  {
    path: 'tasks', component: MainTaskComponent
  },
  {
    path: '', redirectTo: '/tasks', pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
