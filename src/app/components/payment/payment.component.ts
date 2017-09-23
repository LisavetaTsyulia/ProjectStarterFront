import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentService} from "./payment.service";

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
    private paymentService: PaymentService
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
    if (!this.isAnonymous()) {
      if (this.pay != true) {
        this.paymentService.pay(this.userId, this.projectId, this.amount).subscribe();
        this.pay = true;
      }
    }
  }

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
