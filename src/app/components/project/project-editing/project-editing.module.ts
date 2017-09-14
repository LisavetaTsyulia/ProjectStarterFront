import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectEditingComponent} from './project-editing.component';
import { BasicsComponent } from './components/basics/basics.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { StoryComponent } from './components/story/story.component';
import {EditorComponent} from '../../helpers/editor/editor.component';
import {ProjectService} from '../project.service';
import { GoalsComponent } from './components/goals/goals.component';
import { DatePickerModule } from 'ng2-datepicker';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {MdDatepickerModule, MdFormFieldModule, MdNativeDateModule} from '@angular/material';


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

    MdDatepickerModule,
    MdFormFieldModule,
    MdNativeDateModule,

    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
  ],
  declarations: [
    ProjectEditingComponent,
    BasicsComponent,
    RewardsComponent,
    StoryComponent,
    EditorComponent,
    GoalsComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectEditingModule { }