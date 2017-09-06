import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public deleteCookies() {
    localStorage.removeItem("user");
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("user");
  }
}
