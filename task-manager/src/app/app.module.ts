import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { TasksModule } from './tasks/tasks.module';
import { AddTaskFormModule } from './add-task-form/add-task-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    AddTaskFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
