import {Component, OnInit, Input} from '@angular/core';
import {Project} from '../model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() localImage;

  daysToGo: number;
  value: number;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.value = this.project.currentAmount / this.project.targetAmount * 100;
      this.initDaysToGo();
    }, 2000);
  }

  initDaysToGo() {
    this.daysToGo = Number.parseInt(this.project.endDate.toString()) -
      Date.parse(new Date().toString());
    this.daysToGo /= (1000 * 60 * 60 * 24);
    this.daysToGo = Math.floor(this.daysToGo);
  }
  isFinishedFailed() : boolean {
    return (this.project.status === "Finished" || this.project.status === 'Failed')
  }
}
