import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';
import {Headers} from '@angular/http';

@Injectable()
export class ProjectService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  showMessage() {
  }

  create(title: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.serverUrl}project/create`,
        JSON.stringify({title}),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }
}
