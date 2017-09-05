import { AbstractControl } from '@angular/forms';

export class EmailValidators {
  static isValidEmail(control: AbstractControl) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    const email = control.get('email');

    console.log(email);

    if (email.value === 'andrey') {
      return { 'incorrectMailFormat': true };
    }

    if (!email) {
      return null;
    }

    return (email.value.length <= 5 || !EMAIL_REGEXP.test(email.value)) ? { 'incorrectMailFormat': true } : null;
  }
}
