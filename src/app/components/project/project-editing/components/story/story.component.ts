import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../model/project';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() project: Project;
  defaultBodyValue = '';

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.defaultBodyValue = this.project.description;
    }, 2000);
  }

  onTextEditorKeyUp(textValue) {
    this.project.description = textValue;
  }
}
