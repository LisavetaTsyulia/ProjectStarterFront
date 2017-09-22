import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdCardModule, MdButtonModule, MdProgressBarModule} from '@angular/material';
import {AuthModule} from '../auth/auth.module';
import {TranslateModule} from "@ngx-translate/core";
import {AchievementCardComponent} from "./achievement-card.component";

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
    AchievementCardComponent,
  ],
  exports: [
    AchievementCardComponent,
    MdCardModule,
    MdButtonModule,
  ]
})
export class AchievementCardModule { }
