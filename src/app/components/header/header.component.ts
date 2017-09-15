import {Component, OnInit} from '@angular/core';
import {AuthConfigConsts} from 'angular2-jwt';
import {Modal} from "angular2-modal";
import {UserCreatorModal} from "./user-creator-modal";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public email;
  constructor(public modal: Modal) {
  }

  ngOnInit() {
    const user: string = JSON.parse(localStorage.getItem('user'));
    this.email = (user != null ? user['username'] : null);
  }

  public deleteCookies() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('user');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  public isAdmin(): boolean {
    const role: string = JSON.parse(localStorage.getItem('user'));
    return role['role'] === 'ROLE_ADMIN';
  }

  public isUser(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user['role'] === 'ROLE_USER';
  }

  public isConfirmed(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user['role'] === 'ROLE_CONFIRMED_USER';
  }

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }

  openCustom() {
    return this.modal.open(UserCreatorModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
}
