import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from '../auth/auth.module';
import {NewsInfoComponent} from './news-info.component';
import {ProjectService} from '../project/project.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    TranslateModule.forChild()
  ],
  declarations: [
    NewsInfoComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [NewsInfoComponent]
})
export class NewsInfoModule { }
