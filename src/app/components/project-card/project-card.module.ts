import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MdCardModule, MdButtonModule, MdProgressBarModule} from '@angular/material';
import {AuthModule} from '../auth/auth.module';
import {ProjectCardComponent} from './project-card.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    MdCardModule,
    MdButtonModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ProjectCardComponent,
  ],
  exports: [
    ProjectCardComponent,
    MdCardModule,
    MdButtonModule,
  ]
})
export class ProjectCardModule { }
