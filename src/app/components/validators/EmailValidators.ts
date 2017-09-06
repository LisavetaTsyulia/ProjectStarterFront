import {AbstractControl, FormControl} from '@angular/forms';

export class EmailValidators {
  static isValidEmail(email: FormControl) {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.value) {
      return null;
    }
    return !EMAIL_REGEXP.test(email.value) ? { 'incorrectMailFormat': true } : null;
  }
}
