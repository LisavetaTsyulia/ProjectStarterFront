import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../model/project';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-creating',
  templateUrl: './project-creating.component.html',
  styleUrls: ['./project-creating.component.css']
})
export class ProjectCreatingComponent implements OnInit {
  model = new Project();
  submitted = false;
  returnUrl: string;
  formGroup: FormGroup;
  errorMessage: string;
  currentUser;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.returnUrl = 'project/edit/' + (this.currentUser ? this.currentUser.id + '/' : '');
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.currentUser) {
      this.submitted = true;
      this.errorMessage = null;

      this.projectService.showMessage();
      this.projectService.create(this.model.title, this.currentUser.id)
        .subscribe(
          data => {
            this.returnUrl += data.project_id;
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.submitted = false;
            this.errorMessage = error.json().message;
          }
        );
    }
  }
}
