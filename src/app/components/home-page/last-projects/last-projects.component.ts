import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Project} from '../../model/project';
import {ProjectService} from "../../project/project.service";

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.findLastCreatedProjects(this.projects.length).subscribe(data => {
      let newProjects: Project[] = [];
      newProjects = data;
      this.projects = this.projects.concat(newProjects);
      console.log(this.projects);
    });
  }

  onScroll () {
    this.getProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
