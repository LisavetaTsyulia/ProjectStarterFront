import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';
import { FileUploadModule } from 'ng2-file-upload';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {HomePageComponent} from './home-page.component';
import {AuthModule} from '../auth/auth.module';
import {ProjectService} from '../project/project.service';
import {ProjectCardModule} from '../project-card/project-card.module';
import {PaymentService} from '../payment/payment.service';
import {DonateCardModule} from '../donate-card/donate-card.module';
import {TranslateModule} from '@ngx-translate/core';
import { LastProjectsComponent } from './last-projects/last-projects.component';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: HomePageComponent},
      { path: 'last-projects',
        component: LastProjectsComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    DatePickerModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    ProjectCardModule,
    DonateCardModule,
    TranslateModule.forChild(),
    InfiniteScrollModule,
  ],
  declarations: [
    HomePageComponent,
    LastProjectsComponent,
  ],
  providers: [
    ProjectService,
    PaymentService
  ],
  exports: [RouterModule]
})
export class HomePageModule { }
