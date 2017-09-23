import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';
import {Reward} from '../../../../model/reward';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AmountValidators} from '../../../../validators/AmountValidators';

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
  formGroup: FormGroup;

  needToCreate = false;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      amount: ['', [Validators.required, AmountValidators.isValidAmount]],
      description: ['', Validators.required]
    });
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
