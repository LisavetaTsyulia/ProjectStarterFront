import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RegistrationComponent }
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegistrationComponent
  ],
  exports: [RouterModule]
})
export class RegistrationModule { }
