import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private dark: string = 'https://bootswatch.com/darkly/bootstrap.min.css';
  private light: string = 'https://bootswatch.com/flatly/bootstrap.min.css';

  dark_theme_selected: boolean = false;

  constructor() { }

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.changeStyle(theme);
    if (theme === this.dark) {
      this.dark_theme_selected = true;
    }
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
    localStorage.setItem('lang', lang);
  }

  onClickAddThemeCookie(theme: string) {
    if (theme === 'Dark') {
      localStorage.setItem('theme', this.dark);
    } else if (theme === 'Light') {
      localStorage.setItem('theme', this.light);
    }
    this.changeStyle(localStorage.getItem('theme'));
  }
}
