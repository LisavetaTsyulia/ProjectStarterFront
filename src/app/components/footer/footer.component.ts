import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private dark: string = 'https://bootswatch.com/darkly/bootstrap.min.css';
  private light: string = 'https://bootswatch.com/flatly/bootstrap.min.css';

  dark_theme_selected: boolean = false;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.changeStyle(theme);
    if (theme === this.dark) {
      this.dark_theme_selected = true;
    }
    let lang: string = localStorage.getItem('lang');
    this.translate.resetLang(lang['lang']);
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

  @Output() langChange = new EventEmitter<any>();
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
