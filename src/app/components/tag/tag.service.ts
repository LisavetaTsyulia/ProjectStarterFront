import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class TagService {

  constructor(private http: Http) {
  }

  findAllTags() {
    return this.http.get(`${environment.serverUrl}tag/all`).map(res => res.json());
  }
}
