import { Component, OnInit } from '@angular/core';
import {Achievement} from "../../model/achievement";
import {ProjectService} from "../../project/project.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-my-achievements',
  templateUrl: './my-achievements.component.html',
  styleUrls: ['./my-achievements.component.css']
})
export class MyAchievementsComponent implements OnInit {

  achievements: Achievement[] = [];
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
      this.projectService.findAllUserAchievements(this.userId)
        .subscribe(data => {
          this.achievements = data;
        });
    }
  }

}
