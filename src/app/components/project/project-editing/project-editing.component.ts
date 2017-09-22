import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';
import { Ng2FileDropAcceptedFile } from 'ng2-file-drop';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-editing',
  templateUrl: './project-editing.component.html',
  styleUrls: ['./project-editing.component.css']
})
export class ProjectEditingComponent implements OnInit, OnDestroy {
  // Drag and drop
  supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
  imageShown = false;
  currentProfileImage;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'project-starter', uploadPreset: 'clbhkmd8' })
  );

  project = new Project;
  projectId: number;
  private subscription: Subscription;
  errorMessage: string;
  successMessage: string;
  formGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.project.imageUrl = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' +
        res.public_id;
      return { item, response, status, headers };
    };
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params =>
      this.projectId = params['project_id']);

    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
        Object.assign(this.project, data);
        if (!this.project.tags) {
          this.project.tags = [];
        }
      });

    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(60)]]
    });
  }

  onSubmit() {
    this.errorMessage = null;
    this.successMessage = null;

    this.projectService.updateProject(this.project)
      .subscribe(
        data => {
          Object.assign(this.project, data);
          this.successMessage = 'Changes were saved.';
        },
        error => {
          this.errorMessage = error.json().message;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  viewProjectPage() {
    this.router.navigate(['/project-info/' + this.projectId]);
  }

  onTextEditorKeyUp(textValue) {
    this.project.description = textValue;
  }

  // File being dragged has been dropped and is valid
  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    const fileReader = new FileReader();
    fileReader.onload = () => {

      // Set and show the image
      this.currentProfileImage = fileReader.result;
      this.imageShown = true;
    };

    // Read in the file
    fileReader.readAsDataURL(acceptedFile.file);

    this.uploader.uploadAll();
  }
}
