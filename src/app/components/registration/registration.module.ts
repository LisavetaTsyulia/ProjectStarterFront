import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageGuard} from '../login/login-page.guard';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: RegistrationComponent,
        canActivate: [LoginPageGuard] }
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginPageGuard
  ],
  declarations: [
    RegistrationComponent
  ],
  exports: [RouterModule]
})
export class RegistrationModule { }
