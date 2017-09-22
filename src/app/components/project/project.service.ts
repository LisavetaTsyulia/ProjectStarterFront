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
import {Reward} from '../model/reward';
import {Goal} from '../model/goal';

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
    return this.http.get(`${environment.serverUrl}project/info?project_id=` + projectId).map(res => res.json());
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


  createReward(reward: Reward) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/createReward`,
        JSON.stringify(reward),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }

  createGoal(goal: Goal) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/createGoal`,
        JSON.stringify(goal),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }

  findNewsByProjectId(projectId: number) {
    return this.http.get(`${environment.serverUrl}project/news?project_id=` + projectId).map(res => res.json());
  }


  findRewardsByProjectId(projectId: number) {
    return this.http.get(`${environment.serverUrl}project/rewards?project_id=` + projectId).map(res => res.json());
  }

  findAllGoalsByProjectId(projectId: number) {
    return this.http.get(`${environment.serverUrl}project/project_goals?` +
      `project_id=` + projectId).map(res => res.json());
  }

  findCommentsByProjectId(projectId: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get(`${environment.serverUrl}project/comments?project_id=` + projectId, headers).map(res => res.json());
  }

  subscribeToProject(userId: number, projectId: number, needToSubscribe: boolean) {
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

  subscription(userId: number, projectId: number) {
    return this.authHttp.get(`${environment.serverUrl}project/subscription?` +
      `user_id=` + userId + `&project_id=` + projectId).map(res => res.json());
  }


  addComment(projectId: number, commentText: string, userId: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/addComment`,
        JSON.stringify({userId, projectId, commentText}),
        {headers}
      )
      .map(res => {
        return res.json();
      });

  }

  addRating(score: Number, userId: number, projectId: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/addRating`,
        JSON.stringify({userId, projectId, score}),
        {headers}
      )
      .map(res => {
        return res.json();
      });

  }

  findAllUserProjects(userId: number) {
    return this.authHttp.get(`${environment.serverUrl}user/user_projects?` +
      `user_id=` + userId).map(res => res.json());
  }

  findAllUserAchievements(userId: number) {
    return this.authHttp.get(`${environment.serverUrl}user/user_achievements?` +
      `user_id=` + userId).map(res => res.json());
  }

  findAllSubscribedProjectsByUserId(userId: number) {
    return this.authHttp.get(`${environment.serverUrl}user/subscribed_projects?` +
      `user_id=` + userId).map(res => res.json());

  }

  findLastCreatedProjects() {
    return this.http.get(`${environment.serverUrl}project/last_created`).map(res => res.json());
  }

  findSuccessfullyFinancedProjects() {
    return this.http.get(`${environment.serverUrl}project/successfully_financed`).map(res => res.json());
  }

  search(requestString: string, offset: number) {
    return this.http.get(`${environment.serverUrl}project/search?` +
      `requestString=` + requestString + `&offset=` + offset).map(res => res.json());
  }
}
