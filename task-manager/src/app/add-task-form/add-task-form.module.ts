import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddTaskFormComponent } from './add-task-form.component';
import { ErrorMinLengthFieldFormComponent } from '../error-min-length-field-form/error-min-length-field-form.component';

@NgModule({
  declarations: [AddTaskFormComponent, ErrorMinLengthFieldFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: 'form', component: AddTaskFormComponent }]),
  ],
})

export class AddTaskFormModule { }