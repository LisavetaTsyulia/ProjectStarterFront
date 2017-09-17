import {Component, Input, OnInit} from '@angular/core';
import {Comments} from "../../../model/comments";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comments;

  constructor() { }

  ngOnInit() {
  }

}
