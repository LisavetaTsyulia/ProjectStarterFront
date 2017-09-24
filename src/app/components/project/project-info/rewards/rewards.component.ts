import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reward} from "../../../model/reward";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  @Input() reward: Reward;
  @Output() pay = new EventEmitter<any>();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  onContinue(event) {
    this.pay.emit({ event:event, amount: this.reward.amount});
  }

}
