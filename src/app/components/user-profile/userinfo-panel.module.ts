import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {UserinfoPanelComponent} from "./userinfo-panel/userinfo-panel.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserinfoPanelComponent
      }
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserinfoPanelComponent
  ],
  exports: [RouterModule]
})

export class UserinfoPanelModule { }
