import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import {TagService} from '../tag/tag.service';
import {Tag} from '../model/tag';

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
    width : 0.5,
    height : 400,
    overflow: false,
  }

  data: Array<CloudData> = [
    {text: 'Weight-10-link-color', weight: 10, link: 'https://google.com', color: '#ffaaee'},
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com'},
  ];

  constructor(
    private translate: TranslateService,
    private tagService: TagService,
  ) { }

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
        console.log(this.tags);
      });
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
