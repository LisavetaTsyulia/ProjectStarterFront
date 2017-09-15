import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../model/project';
import {News} from '../../../../model/news';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() project: Project;
  defaultBodyValue = '';
  news: News;

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
  }

  cancel() {
    this.news = null;
    this.needToCreate = !this.needToCreate;
  }

  create() {
    console.log(this.news);
    this.projectService.createNews(this.news);
  }
}
