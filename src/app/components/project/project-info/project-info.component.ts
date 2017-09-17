import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';
import {News} from '../../model/news';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  daysToGo: number;
  isSubscribed = false;

  project = new Project;
  projectId: number;
  userId: number;
  private subscription: Subscription;
  errorMessage: string;

  showMoreNewsInfo = false;
  selectedNews: News;
  selectedNewsNumber: number;
  newsArray: News[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params =>
      this.projectId = params['project_id']);
    this.getProject();
    this.getNews();
    this.getNotAnonymousData();
  }

  getNotAnonymousData() {
    if (!this.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.getSubscription();
    }
  }

  getProject() {
    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
        Object.assign(this.project, data);
        this.initDaysToGo();
      });
  }

  getNews() {
    this.projectService.findNewsByProjectId(this.projectId)
      .subscribe(data => {
        Object.assign(this.newsArray, data);
      });
  }

  initDaysToGo() {
    this.daysToGo = Date.parse(this.project.endDate.toString()) -
                    Date.parse(new Date().toString());
    this.daysToGo /= (1000 * 60 * 60 * 24);
    this.daysToGo = Math.floor(this.daysToGo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showNews(selectedNews, selectedNewsNumber) {
    this.selectedNews = selectedNews;
    this.selectedNewsNumber = selectedNewsNumber;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }

  showNewsList() {
    this.selectedNews = null;
    this.selectedNewsNumber = null;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }

  getSubscription() {
    this.projectService.subscription(this.userId, this.projectId)
      .subscribe(data => {
        this.isSubscribed = data.subscribed;
      });
  }

  subscribe() {
    this.projectService.subscribeToProject(this.userId, this.project.id, !this.isSubscribed).subscribe();
    this.isSubscribed = !this.isSubscribed;
  }

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }
}
