import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../project/project.service";
import {Project} from '../model/project';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  project = new Project;
  projectId: number;
  private subscription: Subscription;
  errorMessage: string;

  daysToGo: number;
  value: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.projectService.findProjectById(8)
      .subscribe(data => {
        Object.assign(this.project, data);
        this.value = this.project.currentAmount / this.project.targetAmount * 100;
        this.initDaysToGo();
      });
  }

  initDaysToGo() {
    this.daysToGo = Date.parse(this.project.endDate.toString()) -
      Date.parse(new Date().toString());
    this.daysToGo /= (1000 * 60 * 60 * 24);
    this.daysToGo = Math.floor(this.daysToGo);
  }
}
