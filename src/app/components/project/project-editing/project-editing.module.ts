import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectEditingComponent} from './project-editing.component';
import {EditorComponent} from '../../helpers/editor/editor.component';
import {ProjectService} from '../project.service';
import { DatePickerModule } from 'ng2-datepicker';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {MdDatepickerModule, MdFormFieldModule, MdNativeDateModule} from '@angular/material';
import { Ng2FileDropModule } from 'ng2-file-drop';
import {NewsComponent} from './components/news/news.component';
import {ProjectCardModule} from '../../project-card/project-card.module';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectEditingComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    DatePickerModule,
    ReactiveFormsModule,
    ProjectCardModule,

    MdDatepickerModule,
    MdFormFieldModule,
    MdNativeDateModule,

    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    Ng2FileDropModule,
  ],
  declarations: [
    ProjectEditingComponent,
    EditorComponent,
    NewsComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectEditingModule { }
