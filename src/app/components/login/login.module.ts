import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageGuard} from './login-page.guard';
import {AuthModule} from '../auth/auth.module';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: LoginComponent,
        canActivate: [LoginPageGuard]
      }
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  providers: [
    LoginPageGuard,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [RouterModule]
})
export class LoginModule { }
