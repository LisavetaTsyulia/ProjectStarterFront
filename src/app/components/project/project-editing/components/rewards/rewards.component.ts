import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../../project.service";
import {Reward} from "../../../../model/reward";

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  @Input() projectId: number;
  reward: Reward;
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
    this.reward = new Reward();
    this.successMessage = null;
  }

  cancel() {
    this.reward = null;
    this.needToCreate = !this.needToCreate;
  }

  create() {
    this.errorMessage = null;
    this.successMessage = null;

    this.reward.projectId = this.projectId;
    this.projectService.createReward(this.reward)
      .subscribe(data => {
          Object.assign(this.reward, data);
          this.successMessage = 'The reward was created.';
          this.cancel();
        },
        error => {
          this.errorMessage = error.json().message;
        }
      );
  }

}
