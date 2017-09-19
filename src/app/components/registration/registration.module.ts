import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageGuard} from '../login/login-page.guard';
import {AuthModule} from '../auth/auth.module';
import { ConfirmComponent } from './confirm/confirm.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: RegistrationComponent,
        canActivate: [LoginPageGuard] },
      { path: 'confirm',
        component: ConfirmComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  providers: [
    LoginPageGuard
  ],
  declarations: [
    RegistrationComponent,
    ConfirmComponent
  ],
  exports: [RouterModule]
})
export class RegistrationModule { }
