import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = {name: 'Lis', email: 'jj', password : 'ii', confirmPassword: 'ii'};
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new User();
  }

  constructor() { }

  ngOnInit() {
  }

}
