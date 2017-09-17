import {Component, OnInit} from '@angular/core';
import {AuthConfigConsts} from 'angular2-jwt';
import {DialogService} from "ng2-bootstrap-modal";
import {ConfirmComponent} from "./confirm.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public email;
  confirmResult:boolean = null;
  constructor(
    private dialogService:DialogService
  ) {
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
    this.dialogService.addDialog(ConfirmComponent, {
      title:'Would you like to become a creator?',
      message:'Send your passport scan to create a project'})
      .subscribe((isConfirmed)=>{
        this.confirmResult = isConfirmed;
      });
  }

}
