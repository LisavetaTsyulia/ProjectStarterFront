import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdCardModule, MdButtonModule, MdProgressBarModule} from '@angular/material';
import {AuthModule} from '../auth/auth.module';
import {GoalCardComponent} from './goal-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    MdCardModule,
    MdButtonModule,
  ],
  declarations: [
    GoalCardComponent,
  ],
  exports: [
    GoalCardComponent,
    MdCardModule,
    MdButtonModule,
  ]
})
export class GoalCardModule { }
