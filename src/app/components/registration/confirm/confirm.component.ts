import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../auth/auth.service';
import {AuthConfigConsts} from 'angular2-jwt';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {

  private token: string;
  private email: string;
  private subscription: Subscription;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
) { }

  ngOnInit() {
    this.returnUrl = '/';
    this.subscription = this.activateRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.token = queryParam['token'];
        this.email = queryParam['email'];
      }
    );
    this.confirm();
  }

  confirm() {
    if (this.token) {
      localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, this.token);
      this.authService.confirm(this.email)
        .flatMap(data => {
          return this.authService.getMe();
        })
        .subscribe(
          data => {
            localStorage.setItem('user', JSON.stringify(data));
            this.router.navigate([this.returnUrl]);
          },
          error => {
          }
        );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
