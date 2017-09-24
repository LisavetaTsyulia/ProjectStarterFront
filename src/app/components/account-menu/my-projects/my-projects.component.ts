import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../project/project.service';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  projects: Project[] = [];
  userId: number;

  constructor(
    private projectService: ProjectService,
    public authService : AuthService
  ) { }

  ngOnInit() {
    this.getNotAnonymousData();
  }

  getNotAnonymousData() {
    if (!this.authService.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.projectService.findAllUserProjects(this.userId)
        .subscribe(data => {
          this.projects = data;
        });
    }
  }
}
