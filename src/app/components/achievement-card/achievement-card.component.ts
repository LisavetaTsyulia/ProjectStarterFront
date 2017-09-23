import {Component, Input, OnInit} from '@angular/core';
import {Achievement} from "../model/achievement";

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.css']
})
export class AchievementCardComponent implements OnInit {

  @Input() achievement : Achievement;

  constructor() { }

  ngOnInit() {
    console.log(this.achievement.date);
  }

}
