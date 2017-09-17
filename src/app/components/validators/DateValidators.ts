import {FormControl} from '@angular/forms';

export class DateValidators {
  static isValidDeadline(date: FormControl) {
    const currentDate = Date.now();

    if (!date.value) {
      return null;
    }

    return currentDate > date.value.jsdate ? { 'incorrectDeadline': true } : null;
  }
}
