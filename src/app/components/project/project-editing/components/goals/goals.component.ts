import { Component, OnInit, Input } from '@angular/core';
import {ProjectService} from '../../../project.service';
import {Goal} from '../../../../model/goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  @Input() projectId: number;

  goal: Goal;
  successMessage: string;
  errorMessage: string;

  needToCreate = false;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
  }

  showCreating() {
    this.needToCreate = !this.needToCreate;
    this.goal = new Goal();
    this.successMessage = null;
  }

  cancel() {
    this.goal = null;
    this.needToCreate = !this.needToCreate;
  }

  create() {
    this.errorMessage = null;
    this.successMessage = null;

    this.goal.projectId = this.projectId;
    this.projectService.createGoal(this.goal)
      .subscribe(data => {
          Object.assign(this.goal, data);
          this.successMessage = 'The goal was created.';
          this.cancel();
        },
        error => {
          this.errorMessage = error.json().message;
        }
      );
  }
}
