import {FormControl} from '@angular/forms';

export class AmountValidators {
  static isValidAmount(duration: FormControl) {
    const AMOUNT_REEXP = /^\d+$/;

    if (!duration.value) {
      return null;
    }
    return !AMOUNT_REEXP.test(duration.value) ? { 'incorrectAmountFormat': true } : null;
  }
}
