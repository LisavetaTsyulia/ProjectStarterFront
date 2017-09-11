import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';

@Component({
  selector: 'app-project-editing',
  templateUrl: './project-editing.component.html',
  styleUrls: ['./project-editing.component.css']
})
export class ProjectEditingComponent implements OnInit, OnDestroy {

  project = new Project;
  projectId: number;
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.projectId = params['project_id'];
      this.projectService.findProjectById(this.projectId)
        .subscribe(data => {
          Object.assign(this.project, data);
        });
    });
  }

  onSubmit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
