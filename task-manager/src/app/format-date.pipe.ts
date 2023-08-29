import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const day = this.pad(date.getDate());
      const month = this.pad(date.getMonth() + 1); // Months are zero-based
      const year = date.getFullYear();

      return `${ day } -${ month } -${ year }`;
    }
    return value; // if the date is invalid, return the original value
  }
 
  private pad(num: number): string {
    return num < 10 ? `0${ num }` : num.toString();
  }
}