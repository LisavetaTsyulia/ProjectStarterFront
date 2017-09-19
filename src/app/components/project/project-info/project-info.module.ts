import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../project.service';
import {ProjectInfoComponent} from './project-info.component';
import { DatePickerModule } from 'ng2-datepicker';
import { FileUploadModule } from 'ng2-file-upload';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { NewsInfoComponent } from './news-info/news-info.component';
import {MdCardModule, MdButtonModule} from '@angular/material';
import { CommentComponent } from './comment/comment.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GoalComponent } from './goal/goal.component';
import {GoalCardModule} from "../../goal-card/goal-card.module";
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectInfoComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    MdCardModule,
    MdButtonModule,
    GoalCardModule
  ],
  declarations: [
    ProjectInfoComponent,
    NewsInfoComponent,
    CommentComponent,
    RewardsComponent,
    GoalComponent,
    RatingComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectInfoModule { }
