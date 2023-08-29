import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      titre: new FormControl(null),
      description: new FormControl(null),
      date: new FormControl(null),
      etat: new FormControl(null),
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.minLength(5), Validators.maxLength(100)]],
      date: [''],
      etat: [''],
      // Ajoutez d'autres champs ici avec leurs règles de validation
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}