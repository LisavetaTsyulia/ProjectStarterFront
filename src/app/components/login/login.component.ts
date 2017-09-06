import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidators} from "../validators/EmailValidators";
import {PasswordValidators} from "../validators/PasswordValidators";

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User;
  submitted = false;
  returnUrl: string;
  formGroup: FormGroup;

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new User();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6), EmailValidators.isValidEmail]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    // this.errorMessage = null;
    this.authService.login(this.model.email, this.model.password)
      .flatMap(data => {
        return this.authService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          // this.errorMessage = error.json().message;
        }
      );
  }

}
