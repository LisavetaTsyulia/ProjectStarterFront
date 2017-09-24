import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProjectService} from "../../project.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  change(rating: any) {
    this.rating = rating.rating;
    this.amountOfDonaters = rating.amountOfPeople;
  }

  constructor(
    private projectService: ProjectService,
    private authService: AuthService
  ) { }
  userId: number = JSON.parse(localStorage.getItem('user')).id;
  @Input() amountOfDonaters: number;
  @Input() projectId: number;
  @Input() rating: number;

  ngOnInit() {
  }

  onRating(number: Number) {
    if (!this.authService.isAnonymous() && !this.authService.isBlocked()) {
      this.projectService.addRating(number, this.userId, this.projectId)
        .subscribe(data => {
          this.change(data);
        });
    }
  }
}
