import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SubscribedProjectsComponent} from './subscribed-projects.component';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../../project/project.service';
import {ProjectCardModule} from '../../project-card/project-card.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: SubscribedProjectsComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ProjectCardModule,
    TranslateModule.forChild()
  ],
  declarations: [
    SubscribedProjectsComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class SubscribedProjectsModule { }
