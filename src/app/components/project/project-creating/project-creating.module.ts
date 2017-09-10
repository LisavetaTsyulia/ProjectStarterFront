import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectCreatingComponent} from './project-creating.component';
import {ProjectService} from '../project.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectCreatingComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProjectService
  ],
  declarations: [
    ProjectCreatingComponent
  ],
  exports: [RouterModule]
})
export class ProjectCreatingModule { }
