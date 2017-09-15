import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../../model/news';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() projectId: number;
  defaultBodyValue = '';
  news: News;
  successMessage: string;

  needToCreate = false;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
  }

  onTextEditorKeyUp(textValue) {
    this.news.newsText = textValue;
  }

  showCreating() {
    this.needToCreate = !this.needToCreate;
    this.news = new News();
    this.successMessage = null;
  }

  cancel() {
    this.news = null;
    this.needToCreate = !this.needToCreate;
  }

  create() {
    this.news.projectId = this.projectId;
    this.projectService.createNews(this.news)
      .subscribe(data => {
        Object.assign(this.news, data);
        this.successMessage = 'The news was created.';
        this.cancel();
      });
  }
}
