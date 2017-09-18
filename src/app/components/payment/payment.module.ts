import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from "./payment.component";
import {PaymentService} from "./payment.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: PaymentComponent },
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
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
