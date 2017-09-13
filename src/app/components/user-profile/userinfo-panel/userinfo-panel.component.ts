import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Biography} from "../../model/biography";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {AuthHttp} from "angular2-jwt";
import {EmailValidators} from "../../validators/EmailValidators";
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";

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
  successMessage: string;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'project-starter', uploadPreset: 'clbhkmd8' })
  );

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.biography.imageurl = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' + res.public_id;
      return { item, response, status, headers };
    };
  }

  onChange() {
    this.uploader.uploadAll();
  }

  ngOnInit() {
    let user: string = JSON.parse(localStorage.getItem('user'));
    this.model.email = user['username'];
    this.getUserInfo(user['id']);
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6), EmailValidators.isValidEmail]],
      password: ['', Validators.required],
    });
  }

  getUserInfo(id: number) {
    this.authService.getUserInfo(id)
      .subscribe(
        data => {
          this.transformToBiography(data);
          localStorage.setItem('biography', JSON.stringify(data));
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
    console.log(this.model.email, this.model.password, this.biography.biography,
      this.biography.location, this.biography.imageurl, this.biography.name);
    this.submitted = true;
    this.errorMessage = null;
    this.authService.changeUser(this.model.email, this.model.password, this.biography.biography,
      this.biography.location, this.biography.imageurl, this.biography.name)
      .subscribe(
        data => {
          localStorage.setItem('e', JSON.stringify(data));
          this.successMessage = "Successfully changed!";
        },
        error => {
          this.submitted = false;
          this.errorMessage = error.json().message;
        }
      );
  }

}
