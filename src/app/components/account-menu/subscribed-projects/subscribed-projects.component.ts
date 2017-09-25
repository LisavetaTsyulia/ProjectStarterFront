import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../project/project.service';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-subscribed-projects',
  templateUrl: './subscribed-projects.component.html',
  styleUrls: ['./subscribed-projects.component.css']
})
export class SubscribedProjectsComponent implements OnInit {
  subscribedProjects: Project[] = [];
  userId: number;
  noSubscribedProjects: boolean = false;

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
      this.projectService.findAllSubscribedProjectsByUserId(this.userId)
        .subscribe(data => {
          this.subscribedProjects = data;
          if (this.subscribedProjects.length == 0) {
            this.noSubscribedProjects = true;
          }
        });
    }
  }

}
