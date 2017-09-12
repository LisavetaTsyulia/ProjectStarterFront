import { Component, OnInit } from '@angular/core';
import {AuthConfigConsts} from 'angular2-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public deleteCookies() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('user');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  public isAdmin(): boolean {
    let role : string = JSON.parse(localStorage.getItem('user'));
    return role['role'] === 'ROLE_ADMIN';
  }
}
