import { Component, OnInit, Input } from '@angular/core';
import {Donate} from '../model/donate';
import {DonateService} from './donate.service';
import {Biography} from '../model/biography';

@Component({
  selector: 'app-donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.css']
})
export class DonateCardComponent implements OnInit {
  @Input() donate: Donate;
  biography: Biography;

  constructor(
    private donateService: DonateService
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
}
