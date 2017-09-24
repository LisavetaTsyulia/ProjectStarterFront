import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getNewUserData();
      }
    });
  }

  private getNewUserData() {
    if (!this.authService.isAnonymous() || !this.authService.hasToken()) {
      this.authService.getMe()
        .subscribe(
          data => {
            if (!this.authService.isAnonymous() || !this.authService.hasToken()) {
              localStorage.setItem('user', JSON.stringify(data));
            }
          }
        );
    }
  }

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  onlangChange() {
    this.headerComponent.setLang();
  }
}
