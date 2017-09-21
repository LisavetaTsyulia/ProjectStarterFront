import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';

@Injectable()
export class DonateService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  findUserBiography(userId: number) {
    return this.http.get(`${environment.serverUrl}donate/user-biography?` +
      `user_id=` + userId).map(res => res.json());
  }
}
