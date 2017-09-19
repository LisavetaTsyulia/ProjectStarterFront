import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectEditingComponent} from './project-editing.component';
import {EditorComponent} from '../../helpers/editor/editor.component';
import {ProjectService} from '../project.service';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2FileDropModule } from 'ng2-file-drop';
import {NewsComponent} from './components/news/news.component';
import {ProjectCardModule} from '../../project-card/project-card.module';
import { RewardsComponent } from './components/rewards/rewards.component';
import { GoalsComponent } from './components/goals/goals.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectEditingComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    ProjectCardModule,

    Ng2CloudinaryModule,
    FileUploadModule,
    Ng2FileDropModule,
  ],
  declarations: [
    ProjectEditingComponent,
    EditorComponent,
    NewsComponent,
    RewardsComponent,
    GoalsComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectEditingModule { }
