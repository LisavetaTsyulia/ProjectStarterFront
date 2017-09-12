import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../project.service';
import {ProjectInfoComponent} from './project-info.component';
import { DatePickerModule } from 'ng2-datepicker';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ProjectInfoComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    DatePickerModule
  ],
  declarations: [
    ProjectInfoComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class ProjectInfoModule { }
