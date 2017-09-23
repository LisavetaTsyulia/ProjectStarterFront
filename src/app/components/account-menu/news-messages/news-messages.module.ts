import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../../project/project.service';
import {ProjectCardModule} from '../../project-card/project-card.module';
import {TranslateModule} from '@ngx-translate/core';
import {NewsMessagesComponent} from './news-messages.component';
import {NewsInfoModule} from '../../news-info/news-info.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: NewsMessagesComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ProjectCardModule,
    TranslateModule.forChild(),
    NewsInfoModule,
  ],
  declarations: [
    NewsMessagesComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class NewsMessagesModule { }
