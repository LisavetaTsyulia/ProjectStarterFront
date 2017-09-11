import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { environment } from '../../../environments/environment';
import {AuthConfigConsts, AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  login(username: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}auth/login`,
        JSON.stringify({username, password}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .do(token => {
        localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, token.token);
      });
  }

  logout() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getMe() {
    return this.authHttp.get(`${environment.serverUrl}auth/me`).map(res => res.json());
  }

  getAll() {
    return this.authHttp.get(`${environment.serverUrl}admin/list-of-users`).map(res => res.json());
  }

  register(username: string, email: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}auth/registration`,
        JSON.stringify({username, email, password}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .do(token => {
        localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, token.token);
      });
  }

  getAllProjects() {
    return this.authHttp.get(`${environment.serverUrl}admin/list-of-projects`).map(res => res.json());
  }

  block(emails : string[]) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}admin/block`,
        JSON.stringify({emails}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .subscribe(r=>{});
  }

  unblock(emails : string[]) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}admin/unblock`,
        JSON.stringify({emails}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .subscribe(r=>{});
  }

  deleteEvent(emails: string[], checkboxSettings: boolean[] ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        `${environment.serverUrl}admin/delete`,
        JSON.stringify({emails, checkboxSettings}),
        {headers}
      )
      .subscribe(r=>{});
  }
}
