import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../../model/project';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
   @Input() project: Project;

  constructor() {
  }

  ngOnInit() {
  }

  onTextEditorKeyUp(textValue) {
    this.project.description = textValue;
  }
}
