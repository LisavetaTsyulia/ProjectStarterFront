import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';
import {Headers} from '@angular/http';

@Injectable()
export class AdminService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  block(emails : string[]) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

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
    headers.append('Authorization', localStorage.getItem('token'));

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
    headers.append('Authorization', localStorage.getItem('token'));
    return this.http
      .post(
        `${environment.serverUrl}admin/delete`,
        JSON.stringify({emails, checkboxSettings}),
        {headers}
      )
      .subscribe(r=>{});
  }

  sortByRole(theRole: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}admin/sort-by-role`,
        JSON.stringify({theRole}),
        {headers}
      ).map(res => {
        return res.json();
      });

  }

  sortBy(by: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}admin/sort-by`,
        JSON.stringify({by}),
        {headers}
      ).map(res => {
        return res.json();
      });
  }
}
