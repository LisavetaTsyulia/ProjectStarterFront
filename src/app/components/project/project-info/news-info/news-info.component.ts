import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {News} from '../../../model/news';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit {
  @Input() news: News;
  @Input() newsNumber: number;
  @Output() back = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  backToNews() {
    this.back.emit();
  }
}
