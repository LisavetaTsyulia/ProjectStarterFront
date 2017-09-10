import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../model/project';

@Component({
  selector: 'app-project-creating',
  templateUrl: './project-creating.component.html',
  styleUrls: ['./project-creating.component.css']
})
export class ProjectCreatingComponent implements OnInit {
  model = new Project();
  submitted = false;
  formGroup: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
  }
}
