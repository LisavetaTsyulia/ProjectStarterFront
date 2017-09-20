import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search.component';
import {AuthModule} from '../auth/auth.module';
import {ProjectService} from '../project/project.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: SearchComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class SearchModule { }
