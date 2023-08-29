import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-minLength-field-form',
  template: '<div *ngIf="condition" class="error-message">{{ fieldName }}: {{ errorMessage }}</div>',
})
export class ErrorMinLengthFieldFormComponent {
  @Input() condition: boolean | undefined;
  @Input() fieldName: string | undefined;
  @Input() errorMessage: string | undefined;
}