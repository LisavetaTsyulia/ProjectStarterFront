import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../../project/project.service';
import {TranslateModule} from "@ngx-translate/core";
import {MyAchievementsComponent} from "./my-achievements.component";
import {AchievementCardModule} from "../../achievement-card/achievement-card.module";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: MyAchievementsComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    AchievementCardModule,
    TranslateModule.forChild()
  ],
  declarations: [
    MyAchievementsComponent
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class MyAchievementsModule { }
