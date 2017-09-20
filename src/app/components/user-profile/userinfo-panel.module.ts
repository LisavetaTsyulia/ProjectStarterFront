import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserinfoPanelComponent} from './userinfo-panel/userinfo-panel.component';
import {AuthService} from '../auth/auth.service';
import {AuthModule} from '../auth/auth.module';
import {HttpModule} from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { Ng2FileDropModule } from 'ng2-file-drop';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserinfoPanelComponent
      }
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    Ng2FileDropModule,
    TranslateModule.forChild()
  ],
  declarations: [
    UserinfoPanelComponent
  ],
  providers: [
    AuthService
  ],
  exports: [RouterModule]
})

export class UserinfoPanelModule { }
