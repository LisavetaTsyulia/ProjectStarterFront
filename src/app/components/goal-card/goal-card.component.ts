import { Component, OnInit, Input } from '@angular/core';
import {Goal} from '../model/goal';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {
  @Input() goal: Goal;
  @Input() progressBarValue: number;

  constructor() { }

  ngOnInit() {
  }

}
