import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProjectService} from "../../project.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    this.rating = this.rating;
  }

  change(rating: any) {
    this.rating = rating;
  }

  constructor( private projectService: ProjectService) { }
  userId: number = JSON.parse(localStorage.getItem('user')).id;
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
