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
import {ConfirmModalComponent} from "./confirm-modal/confirm-modal.component";
import {HttpModule} from "@angular/http";
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import {AuthService} from "../auth/auth.service";
import {TranslateModule} from "@ngx-translate/core";

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
    ReactiveFormsModule,
    HttpModule,
    BootstrapModalModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ListOfUsersComponent,
    MainPanelComponent,
    UserControlPanelComponent,
    UserFilterPanelComponent,
    UserPanelComponent,
    ConfirmModalComponent
  ],
  providers: [
    AdminService,
    AuthService
  ],
  exports: [RouterModule],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class ListOfUsersModule { }
