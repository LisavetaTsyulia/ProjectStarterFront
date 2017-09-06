import {FormControl} from '@angular/forms';

export class PasswordValidators {
  static samePasswords(control: FormControl) {
    console.log(control);

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { notSamePasswords: true };
  }
}
