import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';
import {News} from '../../model/news';
import {Reward} from '../../model/reward';
import {Goal} from '../../model/goal';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  daysToGo: number;
  isSubscribed = false;

  project = new Project;
  projectId: number;
  userId: number;
  private subscription: Subscription;
  errorMessage: string;

  showMoreNewsInfo = false;
  selectedNews: News;
  selectedNewsNumber: number;
  newsArray: News[] = [];
  commentsArray: Comment[] = [];
  rewardsArray: Reward[] = [];
  goalsArray: Goal[];
  newCommentText: string;
  amountOfReward: number;
  amountOfDonates: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params =>
      this.projectId = params['project_id']);
    this.getProject();
    this.getGoals();
    this.getNews();
    this.getComments();
    this.getRewards();
    this.getNotAnonymousData();
  }

  getNotAnonymousData() {
    if (!this.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
      this.getSubscription();
    }
  }

  getProject() {
    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
        Object.assign(this.project, data);
        this.amountOfDonates = this.project.amountOfDonates;
        this.initDaysToGo();
      });
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

  showNews(selectedNews, selectedNewsNumber) {
    this.selectedNews = selectedNews;
    this.selectedNewsNumber = selectedNewsNumber;
    this.showMoreNewsInfo = !this.showMoreNewsInfo;
  }

  showNewsList() {
    this.selectedNews = null;
    this.selectedNewsNumber = null;
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

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }

  public isConfirmed(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user['role'] === 'ROLE_CONFIRMED_USER';
  }

  public isAdmin(): boolean {
    const role: string = JSON.parse(localStorage.getItem('user'));
    return role['role'] === 'ROLE_ADMIN';
  }

  addComment() {
    console.log(this.newCommentText);
    this.projectService.addComment(this.projectId, this.newCommentText, this.userId)
      .subscribe(data => {
          this.getComments();
          this.newCommentText = '';
      });
  }

  onContinue(event) {
    console.log(event.amount);
    if (!this.isAnonymous())
      this.router.navigate(['/payment', JSON.parse(localStorage.getItem('user')).id, this.projectId, event.amount]);
  }

  onContinueAnySum(amountOfReward: Number) {
    console.log(amountOfReward);
    if (!this.isAnonymous())
      this.router.navigate(['/payment', JSON.parse(localStorage.getItem('user')).id, this.projectId, this.amountOfReward]);
  }

  editNavigate() {
    this.router.navigate(['project/edit', this.project.userId, this.project.id]);
  }
}
