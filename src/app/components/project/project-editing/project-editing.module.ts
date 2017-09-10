import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectEditingComponent} from './project-editing.component';
import { BasicsComponent } from './components/basics/basics.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { StoryComponent } from './components/story/story.component';
import { AboutYouComponent } from './components/about-you/about-you.component';
import {EditorComponent} from '../../helpers/editor/editor.component';
import {ProjectService} from '../project.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectEditingComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    ProjectEditingComponent,
    BasicsComponent,
    RewardsComponent,
    StoryComponent,
    AboutYouComponent,
    EditorComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectEditingModule { }
