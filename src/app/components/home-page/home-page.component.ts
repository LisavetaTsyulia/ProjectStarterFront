import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../project/project.service';
import {Project} from '../model/project';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lastCreatedProjects: Project[];
  successfullyFinancedProjects: Project[];

  constructor(
    private router: Router,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getLastCreatedProjects();
    this.getSuccessfullyFinancedProjects();
  }

  getLastCreatedProjects() {
    this.projectService.findLastCreatedProjects()
      .subscribe(data => {
        this.lastCreatedProjects = [];
        this.lastCreatedProjects = data;
        this.lastCreatedProjects = this.checkEmptyArray(this.lastCreatedProjects);
        console.log(this.lastCreatedProjects);
      });
  }

  getSuccessfullyFinancedProjects() {
    this.projectService.findSuccessfullyFinancedProjects()
      .subscribe(data => {
        this.successfullyFinancedProjects = [];
        this.successfullyFinancedProjects = data;
        this.successfullyFinancedProjects = this.checkEmptyArray(this.successfullyFinancedProjects);
        console.log(this.successfullyFinancedProjects);
      });
  }

  checkEmptyArray(projectArray: Project[]) {
    return projectArray.length === 0 ? null : projectArray;
  }

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }
}
