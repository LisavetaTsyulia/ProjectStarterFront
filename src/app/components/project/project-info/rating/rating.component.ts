import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProjectService} from "../../project.service";

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

  constructor( private projectService: ProjectService) { }
  userId: number = JSON.parse(localStorage.getItem('user')).id;
  @Input() amountOfDonaters: number;
  @Input() projectId: number;
  @Input() rating: number;

  ngOnInit() {
  }

  onRating(number: Number) {
    if (!this.isAnonymous()) {
      this.projectService.addRating(number, this.userId, this.projectId)
        .subscribe(data => {
          // Object.assign(this.rating, data);
          this.change(data);
        });
    }
  }

  public isAnonymous(): boolean {
    const user: string = JSON.parse(localStorage.getItem('user'));
    return user === null;
  }
}
