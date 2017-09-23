import {FormControl} from '@angular/forms';

export class AmountValidators {
  static isValidAmount(duration: FormControl) {
    const AMOUNT_REGEXP = /^[1-9]\d*$/;

    if (!duration.value) {
      return null;
    }
    return !AMOUNT_REGEXP.test(duration.value) ? { 'incorrectAmountFormat': true } : null;
  }
}
