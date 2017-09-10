import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectCreatingComponent} from './project-creating.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectCreatingComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    ProjectCreatingComponent
  ],
  exports: [RouterModule]
})
export class ProjectCreatingModule { }
