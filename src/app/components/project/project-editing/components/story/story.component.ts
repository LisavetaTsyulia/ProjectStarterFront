import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../../model/project';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit, OnDestroy {

  project: Project;
  projectId: number;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
    ) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.projectId = params['project_id'];
      console.log(this.projectId);
    });
  }

  onTextEditorKeyUp(textValue) {
    console.log(textValue);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
      console.log(data);
    });
// Object.assign(this.project,
    //   this.projectService.findProjectById(params['project_id']));
  }
}
