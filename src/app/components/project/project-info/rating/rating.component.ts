import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProjectService} from "../../project.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  userId: number;
  @Input() amountOfDonaters: number;
  @Input() userRating: number;
  @Input() projectId: number;
  @Input() rating: number;

  change(rating: any) {
    this.rating = rating.rating;
    this.amountOfDonaters = rating.amountOfPeople;
  }

  constructor(
    private projectService: ProjectService,
    private authService: AuthService
  ) {
    if (!this.authService.isAnonymous()) {
      this.userId = JSON.parse(localStorage.getItem('user')).id;
    }
  }

  ngOnInit() {
  }

  onRating(number: number) {
    if (!this.authService.isAnonymous() && !this.authService.isBlocked()) {
      this.projectService.addRating(number, this.userId, this.projectId)
        .subscribe(data => {
          this.change(data);
          this.userRating = number;
        });
    }
  }
}
