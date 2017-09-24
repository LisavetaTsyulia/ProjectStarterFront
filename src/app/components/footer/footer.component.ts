import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import {TagService} from '../tag/tag.service';
import {Tag} from '../model/tag';
import {Observable} from 'rxjs/Observable';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() langChange = new EventEmitter<any>();

  private dark = 'https://bootswatch.com/darkly/bootstrap.min.css';
  private light = 'https://bootswatch.com/flatly/bootstrap.min.css';

  dark_theme_selected = false;
  english_selected = false;
  tags: Tag[];

  options: CloudOptions = {
    width: 0.5,
    height: 200,
    overflow: false,
  };

  data: Array<CloudData> = [];

  constructor(
    private translate: TranslateService,
    private tagService: TagService,
    private router: Router,
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getAllTags();
      }
    });
  }

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.changeStyle(theme);
    if (theme === this.dark) {
      this.dark_theme_selected = true;
    }
    const lang: string = localStorage.getItem('lang');
    this.translate.resetLang(lang['lang']);
    if (lang === 'English' || lang === 'Английский') {
      this.english_selected = true;
    }
    this.getAllTags();
  }

  private getAllTags() {
    this.tagService.findAllTags()
      .subscribe(data => {
        this.tags = [];
        this.tags = data;
        this.addTagsToArray(this.tags);
      });
  }

  addTagsToArray(tags: Tag[]) {
    const newTags: Array<CloudData> = [];
    for (const tag of tags) {
      newTags.push({text: tag.tagName, weight: tag.projectCount,
        link: 'search?search_request=' + tag.tagName, color: '#ffffff'});
    }
    const changedData: Observable<Array<CloudData>> = Observable.of(newTags);
    changedData.subscribe(res => this.data = res);
  }

  changeStyle(style) {
    style = (style === 'undefined' ? this.light : style);
    const links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (link.href === this.dark || link.href === this.light ) {
        localStorage.setItem('theme', style);
        link.href = style;
      }
    }
  }

  onClickAddLangCookie(lang: string) {
    if (lang === 'English' || lang === 'Английский')
      lang = 'English';
    else
      lang = 'Russian';
    localStorage.setItem('lang', lang);
    this.translate.resetLang(lang);
    this.langChange.emit();
  }

  onClickAddThemeCookie(theme: string) {
    if (theme === 'Dark' || theme === 'Темная') {
      localStorage.setItem('theme', this.dark);
    } else if (theme === 'Light' || theme === 'Светлая') {
      localStorage.setItem('theme', this.light);
    }
    this.changeStyle(localStorage.getItem('theme'));
  }
}
