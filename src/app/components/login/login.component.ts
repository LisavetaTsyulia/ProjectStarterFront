import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { User } from '../user/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = {name: 'Lis', email: 'jj', password: 'ii', confirmPassword: 'ii'};
  submitted = false;
  returnUrl: string;

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new User();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
