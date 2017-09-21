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
    this.amountOfPeople = rating.amountOfPeople;
  }

  constructor( private projectService: ProjectService) { }
  userId: number = JSON.parse(localStorage.getItem('user')).id;
  amountOfPeople: number;
  @Input() projectId: number;
  @Input() rating: number;

  ngOnInit() {
  }

  onRating(number: Number) {
    this.projectService.addRating(number, this.userId, this.projectId)
      .subscribe( data => {
        // Object.assign(this.rating, data);
        this.change(data);
      });
  }
}
