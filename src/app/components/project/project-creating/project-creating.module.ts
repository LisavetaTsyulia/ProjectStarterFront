import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectCreatingComponent} from './project-creating.component';
import {ProjectService} from '../project.service';
import {MdDatepickerModule, MdFormFieldModule, MdNativeDateModule} from '@angular/material';
import {MyDatePickerModule} from 'mydatepicker';

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
    MyDatePickerModule,
    // MdDatepickerModule,
    // MdFormFieldModule,
    // MdNativeDateModule,
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
