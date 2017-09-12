import {FormControl} from '@angular/forms';

export class FundingDurationValidators {
  static isValidAmount(duration: FormControl) {
    const AMOUNT_REEXP = /^[0-9]*(\.[0-9]{1,2})?$/;

    if (!duration.value) {
      return null;
    }
    return !AMOUNT_REEXP.test(duration.value) ? { 'incorrectAmountFormat': true } : null;
  }
}
