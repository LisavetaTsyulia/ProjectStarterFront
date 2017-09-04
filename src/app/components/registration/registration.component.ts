import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  newUser = new User();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }
}
