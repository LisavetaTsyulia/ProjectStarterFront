import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOfUsersComponent } from "./list-of-users.component";
import {AuthModule} from "../../auth/auth.module";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ListOfUsersComponent
      }
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListOfUsersComponent
  ],
  exports: [RouterModule]
})
export class ListOfUsersModule { }
