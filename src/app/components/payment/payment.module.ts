import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from "./payment.component";
import {PaymentService} from "./payment.service";
import {HttpModule} from "@angular/http";
import {TranslateModule} from "@ngx-translate/core";
import {AuthModule} from "../auth/auth.module";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: PaymentComponent },
    ]),
    CommonModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forChild()
  ],
  declarations: [
    PaymentComponent
  ],
  providers: [
    PaymentService
  ],
  exports: [RouterModule]
})
export class PaymentModule { }
