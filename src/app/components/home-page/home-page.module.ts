import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';
import { FileUploadModule } from 'ng2-file-upload';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {MdCardModule, MdButtonModule, MdProgressBarModule} from '@angular/material';
import {HomePageComponent} from './home-page.component';
import {AuthModule} from '../auth/auth.module';
import {ProjectService} from '../project/project.service';
import {ProjectCardComponent} from '../project-card/project-card.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: HomePageComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    MdCardModule,
    MdButtonModule,
    MdProgressBarModule,
  ],
  declarations: [
    HomePageComponent,
    ProjectCardComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class HomePageModule { }
