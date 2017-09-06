<<<<<<< HEAD
import {AbstractControl, FormControl} from '@angular/forms';

||||||| merged common ancestors
import {Control} from 'angular2'

=======
>>>>>>> feature/auth-login
export class EmailValidators {
<<<<<<< HEAD
  static isValidEmail(email: FormControl) {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
||||||| merged common ancestors
  static isValid(control: Control) {
=======
>>>>>>> feature/auth-login

<<<<<<< HEAD
    if (!email.value) {
      return null;
    }
    return !EMAIL_REGEXP.test(email.value) ? { 'incorrectMailFormat': true } : null;
  }
||||||| merged common ancestors
  }
=======
>>>>>>> feature/auth-login
}
