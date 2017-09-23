import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../project.service';
import {ProjectInfoComponent} from './project-info.component';
import { DatePickerModule } from 'ng2-datepicker';
import { FileUploadModule } from 'ng2-file-upload';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {MdCardModule, MdButtonModule} from '@angular/material';
import { CommentComponent } from './comment/comment.component';
import { RewardsComponent } from './rewards/rewards.component';
import {GoalCardModule} from '../../goal-card/goal-card.module';
import { RatingComponent } from './rating/rating.component';
import {TranslateModule} from '@ngx-translate/core';
import {NewsInfoModule} from '../../news-info/news-info.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectInfoComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    MdCardModule,
    MdButtonModule,
    GoalCardModule,
    TranslateModule.forChild(),
    NewsInfoModule,
  ],
  declarations: [
    ProjectInfoComponent,
    CommentComponent,
    RewardsComponent,
    RatingComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectInfoModule { }
