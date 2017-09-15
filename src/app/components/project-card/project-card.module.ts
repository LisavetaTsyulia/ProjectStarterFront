import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MdCardModule, MdButtonModule} from '@angular/material';
import {AuthModule} from '../auth/auth.module';
import {ProjectCardComponent} from './project-card.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectCardComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [
    ProjectCardComponent,
  ],
  exports: [RouterModule]
})
export class ProjectCardModule { }
