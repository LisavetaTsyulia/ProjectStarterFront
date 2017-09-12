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
    ReactiveFormsModule,
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
