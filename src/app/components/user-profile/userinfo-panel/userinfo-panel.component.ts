import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Biography} from "../../model/biography";
import {environment} from "../../../../environments/environment";
import {Http, Headers} from '@angular/http';
import {AuthHttp} from "angular2-jwt";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-userinfo-panel',
  templateUrl: './userinfo-panel.component.html',
  styleUrls: ['./userinfo-panel.component.css']
})
export class UserinfoPanelComponent implements OnInit {

  public model = new User;
  public biography = new Biography();
  submitted = false;
  returnUrl: string;
  formGroup: FormGroup;
  errorMessage: string;

  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let user: string = JSON.parse(localStorage.getItem('user'));
    this.model.email = user['username'];
    this.getUserInfo(user['id']);
  }

  getUserInfo(id: number) {
    this.authService.getUserInfo(id)
      .subscribe(
        data => {
          this.transformToBiography(data);
          console.log(JSON.stringify(data));
        }
      );
  }

  transformToBiography(data: any) {
    this.biography.biography = data.biography;
    this.biography.location = data.location;
    this.biography.name = data.name;
    this.biography.imageurl = data.imageUrl;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
    this.authService.changeUser(this.model.email, this.model.password, this.biography.biography,
      this.biography.location, this.biography.imageurl, this.biography.name)
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          this.errorMessage = error.json().message;
        }
      );
  }

  onCancel() {
    
  }
}
