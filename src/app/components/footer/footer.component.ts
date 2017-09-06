import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lang: string;

  constructor() { }

  ngOnInit() {
  }

  onClickAddLangCookie(lang: string) {
    localStorage.setItem("lang", lang);
  }

  onClickAddThemeCookie(theme: string) {
    localStorage.setItem("theme", theme);
  }
}
