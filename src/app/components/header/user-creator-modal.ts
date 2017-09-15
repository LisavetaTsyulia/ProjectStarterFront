import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";
import { Ng2FileDropAcceptedFile } from 'ng2-file-drop';


export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [`
    .custom-modal-container {
      padding: 15px;
    }

    .custom-modal-header {
      color: #fff;
      -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      margin-top: -15px;
      margin-bottom: 40px;
      border-radius: 5px;
    }
  `],
  template: `
    <div class="container-fluid custom-modal-container">
      <div class="row custom-modal-header bg-success text-white">
        <div class="col-sm-12">
          <h1>Would you like to become a creator?</h1>
        </div>
      </div>
      <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
        <div class="col-xs-12">
          <div class="jumbotron">
            <h2>If you want to create a project, send us your passport scan</h2>
            <div class="profile-picture-section">
              <div ng2FileDrop [uploader]="uploader" [ng2FileDropSupportedFileTypes]="supportedFileTypes"
                   (ng2FileDropFileAccepted)="dragFileAccepted($event)"
                   class="profile-picture-section-drop-zone">
                <div *ngIf="!imageShown" class=profile-picture-section-request-image-group>
                  <p class="profile-picture-section-request-image-instructions">Drop your passport scan here</p>
                </div>
                <div *ngIf="imageShown" class=profile-picture-section-request-image-container>
                  <img class="profile-picture-section-request-image" [src]="currentProfileImage">
                </div>
              </div>
              <p class="profile-picture-section-limitations">Profile picture can be .png, .jpeg or .gif only</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <button class="form-control btn btn-success" (click)="closeDialog()">Confirm</button>
        </div>
        <div class="col-sm-6">
          <button class="form-control btn btn-success" (click)="closeDialog()">Later</button>
        </div>
      </div>
    </div>`
})
export class UserCreatorModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;
  public image: string;

  public wrongAnswer: boolean;

  supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
  imageShown: boolean = false;
  currentProfileImage: string = 'assets/profile-placeholder.png';

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'project-starter', uploadPreset: 'clbhkmd8' })
  );

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.image = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' + res.public_id;
      return { item, response, status, headers };
    };
  }

  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.currentProfileImage = fileReader.result;
      this.imageShown = true;
    };
    fileReader.readAsDataURL(acceptedFile.file);
    this.uploader.uploadAll();
  }

  closeDialog() {
    this.dialog.close();
  }

}
