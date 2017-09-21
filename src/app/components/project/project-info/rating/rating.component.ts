import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../project.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor( private projectService: ProjectService) { }
  userId: number = JSON.parse(localStorage.getItem('user')).id;
  @Input() projectId: number;

  ngOnInit() {
  }

  onRating(number: Number) {
    this.projectService.addRating(number, this.userId, this.projectId).subscribe();
  }
}
