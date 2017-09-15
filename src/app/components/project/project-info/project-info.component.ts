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

  project = new Project;
  projectId: number;
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
        console.log(this.newsArray);
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
}
