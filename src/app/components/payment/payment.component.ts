import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private pay: boolean = false;
  private userId: number;
  private projectId: number;
  public amount: number;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

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
    this.pay = true;
  }

}
