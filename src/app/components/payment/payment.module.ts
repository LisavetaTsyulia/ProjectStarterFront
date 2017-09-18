import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from "./payment.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: PaymentComponent },
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaymentComponent
  ],
  exports: [RouterModule]
})
export class PaymentModule { }
