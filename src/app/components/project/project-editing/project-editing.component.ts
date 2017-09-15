import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';
import {CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-project-editing',
  templateUrl: './project-editing.component.html',
  styleUrls: ['./project-editing.component.css']
})
export class ProjectEditingComponent implements OnInit, OnDestroy {
  project = new Project;
  projectId: number;
  private subscription: Subscription;
  errorMessage: string;
  successMessage: string;

  uploader: CloudinaryUploader;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params =>
      this.projectId = params['project_id']);

    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
        Object.assign(this.project, data);
      });
  }

  onSubmit() {
    this.errorMessage = null;
    this.successMessage = null;

    this.projectService.updateProject(this.project)
      .subscribe(
        data => {
          Object.assign(this.project, data);
          this.successMessage = 'Changes saved.';
        },
        error => {
          this.errorMessage = error.json().message;
        }
      );
  }

  onUpload(uploader) {
    this.uploader = uploader;
    if (this.uploader) {
      this.uploader.uploadAll();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
