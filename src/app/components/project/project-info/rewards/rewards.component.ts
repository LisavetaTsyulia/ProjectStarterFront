import {Component, Input, OnInit} from '@angular/core';
import {Reward} from "../../../model/reward";

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  @Input() reward: Reward;

  constructor() { }

  ngOnInit() {
  }

  onContinue() {

  }

}
