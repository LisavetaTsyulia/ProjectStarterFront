import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../project/project.service';
import {News} from '../../model/news';

@Component({
  selector: 'app-news-messages',
  templateUrl: './news-messages.component.html',
  styleUrls: ['./news-messages.component.css']
})
export class NewsMessagesComponent implements OnInit {
  newsArray: News[] = [];
  userId: number;

  showMoreNewsInfo = false;
  selectedNews: News;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getNotAnonymousData();
  }

  getNotAnonymousData() {
    if (!this.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.projectService.findAllUserSubscribedProjectsNews(this.userId)
        .subscribe(data => {
          this.newsArray = data;
          console.log(this.newsArray);
        });
    }
  }

  isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }

  showNews(selectedNews) {
    this.selectedNews = selectedNews;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }

  showNewsList() {
    this.selectedNews = null;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }
}
