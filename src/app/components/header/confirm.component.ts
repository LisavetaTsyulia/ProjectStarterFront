import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {Http, Headers} from '@angular/http';
import {AuthService} from '../auth/auth.service';
import {Ng2FileDropAcceptedFile} from 'ng2-file-drop';
import {environment} from '../../../environments/environment';

export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  public image: string;
  supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
  imageShown = false;
  currentProfileImage = 'assets/profile-placeholder.png';
  imageLoaded = true;
  imageDraged = false;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'project-starter', uploadPreset: 'clbhkmd8' })
  );

  constructor(
    dialogService: DialogService,
    public http: Http,
    public authService: AuthService
  ) {
    super(dialogService);
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.image = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' + res.public_id;
      this.imageLoaded = true;
      return { item, response, status, headers };
    };
  }

  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    this.imageLoaded = false;
    this.imageDraged = true;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.currentProfileImage = fileReader.result;
      this.imageShown = true;
    };
    fileReader.readAsDataURL(acceptedFile.file);
    this.uploader.uploadAll();
  }

  confirm() {
    const image: string = this.image;
    const user: string = JSON.parse(localStorage.getItem('user'));
    const email: string = user['username'];
    console.log(this.image, email);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    this.http
      .post(
        `${environment.serverUrl}user/send-to-confirm`,
        JSON.stringify({image, email}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .flatMap(data => {
        return this.authService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
        });
    this.result = true;
    this.close();
  }
}
