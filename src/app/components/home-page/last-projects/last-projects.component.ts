import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../project/project.service';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent implements OnInit {
  projects: Project[] = [];
  canFind = true;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    if (this.canFind) {
      this.canFind = false;
      this.projectService.findLastCreatedProjects(this.projects.length).subscribe(data => {
        let newProjects: Project[] = [];
        newProjects = data;
        this.projects = this.projects.concat(newProjects);
        this.canFind = true;
      });
    }
  }

  onScroll () {
    this.getProjects();
  }
}
