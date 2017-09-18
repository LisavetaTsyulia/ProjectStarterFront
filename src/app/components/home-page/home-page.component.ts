import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from "../project/project.service";
import {Project} from "../model/project";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lastCreatedProjects: Project[] = [];

  constructor(
    private router: Router,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getLastCreatedProjects();
  }

  joinUs() {
    this.router.navigate(['registration']); // Doesn't work
    // this.router.navigateByUrl('registration');
  }

  getLastCreatedProjects() {
    this.projectService.findLastCreatedProjects()
      .subscribe(data => {
        this.lastCreatedProjects = data;
        console.log(this.lastCreatedProjects);
      });
  }
}
