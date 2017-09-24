import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project/project.service';
import {Project} from '../model/project';
import {Donate} from '../model/donate';
import {PaymentService} from '../payment/payment.service';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lastCreatedProjects: Project[];
  successfullyFinancedProjects: Project[];
  theBiggestDonations: Donate[];

  constructor(
    private projectService: ProjectService,
    private paymentService: PaymentService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getLastCreatedProjects();
    this.getSuccessfullyFinancedProjects();
    this.getTheBiggestDonations();
  }

  getLastCreatedProjects() {
    this.projectService.findLastCreatedProjects(0)
      .subscribe(data => {
        this.lastCreatedProjects = [];
        this.lastCreatedProjects = data;
        this.lastCreatedProjects = this.checkEmptyProjectArray(this.lastCreatedProjects);
        console.log(this.lastCreatedProjects);
      });
  }

  getSuccessfullyFinancedProjects() {
    this.projectService.findSuccessfullyFinancedProjects()
      .subscribe(data => {
        this.successfullyFinancedProjects = [];
        this.successfullyFinancedProjects = data;
        this.successfullyFinancedProjects = this.checkEmptyProjectArray(this.successfullyFinancedProjects);
        console.log(this.successfullyFinancedProjects);
      });
  }

  getTheBiggestDonations() {
    this.paymentService.findTheBiggestDonations()
      .subscribe(data => {
        this.theBiggestDonations = [];
        this.theBiggestDonations = data;
        this.theBiggestDonations = this.checkEmptyDonationArray(this.theBiggestDonations);
        console.log(this.theBiggestDonations);
      });
  }

  checkEmptyProjectArray(projectArray: Project[]) {
    return projectArray.length === 0 ? null : projectArray;
  }

  checkEmptyDonationArray(donationArray: Donate[]) {
    return donationArray.length === 0 ? null : donationArray;
  }
}
