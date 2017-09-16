import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';
import {Headers} from '@angular/http';
import {Project} from '../model/project';
import {News} from '../model/news';

@Injectable()
export class ProjectService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  showMessage() {
  }

  create(title: string, userId: number, endDate: Date, targetAmount: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/create`,
        JSON.stringify({title, userId, endDate, targetAmount}),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }

  findProjectById(projectId: number) {
    return this.http.get(`${environment.serverUrl}project/` + projectId).map(res => res.json());
  }

  updateProject(project: Project) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/update`,
        JSON.stringify(project),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }

  createNews(news: News) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/createNews`,
        JSON.stringify(news),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }

  findNewsByProjectId(projectId: number) {
    return this.authHttp.get(`${environment.serverUrl}project/news?project_id=` + projectId).map(res => res.json());
  }

  subscribe(userId: number, projectId: number, needToSubscribe: boolean) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/subscribe`,
        JSON.stringify({userId, projectId, needToSubscribe}),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }
}
