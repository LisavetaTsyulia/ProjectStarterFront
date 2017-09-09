import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOfUsersComponent } from "./list-of-users/list-of-users.component";
import {AuthModule} from "../auth/auth.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainPanelComponent} from "./main-panel/main-panel.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: MainPanelComponent
      }
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListOfUsersComponent,
    MainPanelComponent
  ],
  exports: [RouterModule]
})
export class ListOfUsersModule { }
