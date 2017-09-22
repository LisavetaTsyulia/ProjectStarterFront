import { Component, OnInit, Input } from '@angular/core';
import {Donate} from '../model/donate';
import {DonateService} from './donate.service';
import {Biography} from '../model/biography';
import {Router} from '@angular/router';

@Component({
  selector: 'app-donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.css']
})
export class DonateCardComponent implements OnInit {
  @Input() donate: Donate;
  @Input() number: number;
  biography: Biography;

  constructor(
    private donateService: DonateService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.donateService.findUserBiography(this.donate.userId)
      .subscribe(data => {
        this.biography = new Biography;
        Object.assign(this.biography, data);
    });
  }

  viewProject() {
    this.router.navigate(['project-info', this.donate.projectId]);
  }
}
