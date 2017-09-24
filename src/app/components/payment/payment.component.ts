import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentService} from "./payment.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {
  private pay: boolean = false;
  private userId: number;
  private projectId: number;
  public amount: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      this.projectId = +params['projectId'];
      this.amount = +params['amount'];
    });
  }

  isClickedPay() {
    return this.pay;
  }

  toPay() {
    if (!this.authService.isAnonymous() && !this.authService.isBlocked()) {
      if (this.pay != true) {
        this.paymentService.pay(this.userId, this.projectId, this.amount).subscribe();
        this.pay = true;
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
