import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';
import {News} from '../../model/news';
import {Reward} from '../../model/reward';
import {Goal} from '../../model/goal';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AmountValidators} from "../../validators/AmountValidators";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  daysToGo: number;
  isSubscribed = false;
  commentFormGroup: FormGroup;
  formGroup: FormGroup;

  project = new Project;
  projectId: number;
  userId: number;
  private subscription: Subscription;
  errorMessage: string;
  donateMinMessage: string;

  showMoreNewsInfo = false;
  selectedNews: News;
  newsArray: News[] = [];
  commentsArray: Comment[] = [];
  rewardsArray: Reward[] = [];
  goalsArray: Goal[];
  newCommentText: string;
  amountOfReward: number;
  amountOfDonates: number;
  userRating: number;
  addCommentButtonPressed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private projectService: ProjectService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params =>
      this.projectId = params['project_id']);
    this.getProject();
    this.getGoals();
    this.getNews();
    this.getComments();
    this.getRewards();
    this.getUserRating();
    this.getNotAnonymousData();
    this.createCommentFormGroup();
    this.donateMinMessage = null;
  }

  createCommentFormGroup() {
    this.commentFormGroup = this.fb.group({
      comment: ['', Validators.required]
    });
    this.formGroup = this.fb.group({
      donateAmount: ['', [AmountValidators.isValidAmount, Validators.required]]
    });

  }

  getNotAnonymousData() {
    if (!this.authService.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.getSubscription();
    }
  }


  getUserRating() {
    if(!this.authService.isAnonymous()) {
      this.projectService.findRating( this.projectId)
        .subscribe(data => {
          console.log(data);
          this.userRating = data;
        });
    }
  }

  getProject() {
    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
        Object.assign(this.project, data);
        this.changeAmountOfDonates();
        this.initDaysToGo();
      });
  }

  changeAmountOfDonates() {
    this.amountOfDonates = this.project.amountOfDonates;
  }

  getGoals() {
    this.projectService.findAllGoalsByProjectId(this.projectId)
      .subscribe(data => {
        this.goalsArray = [];
        Object.assign(this.goalsArray, data);
        this.goalsArray = this.checkEmptyGoalsArray(this.goalsArray);
      });
  }

  checkEmptyGoalsArray(goalArray: Goal[]) {
    return goalArray.length === 0 ? null : goalArray;
  }

  getNews() {
    this.projectService.findNewsByProjectId(this.projectId)
      .subscribe(data => {
        Object.assign(this.newsArray, data);
      });
  }

  getComments() {
    this.projectService.findCommentsByProjectId(this.projectId)
      .subscribe(data => {
        Object.assign(this.commentsArray, data);
      });
  }

  getRewards() {
    this.projectService.findRewardsByProjectId(this.projectId)
      .subscribe(data => {
        Object.assign(this.rewardsArray, data);
      });
  }

  initDaysToGo() {
    this.daysToGo = Number.parseInt(this.project.endDate.toString()) -
      Date.parse(new Date().toString());
    this.daysToGo /= (1000 * 60 * 60 * 24);
    this.daysToGo = Math.floor(this.daysToGo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showNews(selectedNews) {
    this.selectedNews = selectedNews;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }

  showNewsList() {
    this.selectedNews = null;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }

  getSubscription() {
    this.projectService.subscription(this.userId, this.projectId)
      .subscribe(data => {
        this.isSubscribed = data.subscribed;
      });
  }

  subscribe() {
    this.projectService.subscribeToProject(this.userId, this.project.id, !this.isSubscribed).subscribe();
    this.isSubscribed = !this.isSubscribed;
  }

  addComment() {
    this.errorMessage = null;
    this.addCommentButtonPressed = true;
    if (!this.authService.isAnonymous()) {
      this.projectService.addComment(this.projectId, this.newCommentText, this.userId)
        .subscribe(
          data => {
            this.getComments();
            this.newCommentText = '';
            this.addCommentButtonPressed = false;
          },
          err => {
            this.errorMessage = err.json().message;
            console.log(this.errorMessage);
            this.addCommentButtonPressed = false;
          }
        );
    }
  }

  onContinue(event) {
    console.log(event.amount);
    if (!this.authService.isAnonymous())
      this.router.navigate(['/payment', JSON.parse(localStorage.getItem('user')).id, this.projectId, event.amount]);
  }

  onContinueAnySum(amountOfReward: Number) {
    console.log(amountOfReward);
    if (!this.authService.isAnonymous()) {
      if (this.amountOfReward >= this.project.donateMin) {
        this.router.navigate(['/payment', JSON.parse(localStorage.getItem('user')).id, this.projectId, this.amountOfReward]);
      } else {
        this.donateMinMessage = 'This donation is less than minimum donation for this project ' + this.project.donateMin + '$.';
      }
    }
  }

  editNavigate() {
    this.router.navigate(['project/edit', this.project.userId, this.project.id]);
  }

  isFinishedFailed(): boolean {
    return (this.project.status === 'Finished' || this.project.status === 'Failed')
  }
}
