import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidators} from '../validators/EmailValidators';
import {PasswordValidators} from '../validators/PasswordValidators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [FormBuilder]
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  newUser = new User();
  formGroup: FormGroup;
  passwords: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(6), EmailValidators.isValidEmail]],
      passwords: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', [Validators.required]]
      }, { passwordsMatcher: PasswordValidators.samePasswords})
    });
  }
  onSubmit() { this.submitted = true; }
}
