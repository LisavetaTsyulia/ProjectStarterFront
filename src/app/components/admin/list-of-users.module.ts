import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOfUsersComponent } from "./list-of-users/list-of-users.component";
import {AuthModule} from "../auth/auth.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainPanelComponent} from "./main-panel/main-panel.component";
import { UserControlPanelComponent } from './user-control-panel/user-control-panel.component';
import { UserFilterPanelComponent } from './user-filter-panel/user-filter-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import {AdminService} from "./admin.service";

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
    MainPanelComponent,
    UserControlPanelComponent,
    UserFilterPanelComponent,
    UserPanelComponent
  ],
  providers: [
    AdminService
  ],
  exports: [RouterModule]
})
export class ListOfUsersModule { }
