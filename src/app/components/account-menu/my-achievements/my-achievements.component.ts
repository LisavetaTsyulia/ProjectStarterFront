import { Component, OnInit } from '@angular/core';
import {Achievement} from "../../model/achievement";
import {ProjectService} from "../../project/project.service";

@Component({
  selector: 'app-my-achievements',
  templateUrl: './my-achievements.component.html',
  styleUrls: ['./my-achievements.component.css']
})
export class MyAchievementsComponent implements OnInit {

  achievements: Achievement[] = [];
  userId: number;
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getNotAnonymousData();
  }

  getNotAnonymousData() {
    if (!this.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.projectService.findAllUserAchievements(this.userId)
        .subscribe(data => {
          this.achievements = data;
        });
    }
  }

  isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }

}
