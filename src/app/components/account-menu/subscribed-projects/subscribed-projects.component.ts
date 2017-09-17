import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../project/project.service';

@Component({
  selector: 'app-subscribed-projects',
  templateUrl: './subscribed-projects.component.html',
  styleUrls: ['./subscribed-projects.component.css']
})
export class SubscribedProjectsComponent implements OnInit {
  subscribedProjects: Project[] = [];
  userId: number;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getNotAnonymousData();
  }

  getNotAnonymousData() {
    if (!this.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.projectService.findAllSubscribedProjectsByUserId(this.userId)
        .subscribe(data => {
          this.subscribedProjects = data;
        });
    }
  }

  isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }
}
