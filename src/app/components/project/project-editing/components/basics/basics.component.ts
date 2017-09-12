import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../model/project';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @Input() project: Project;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'project-starter', uploadPreset: 'clbhkmd8' })
  );

  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();

    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.project.imageUrl = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' +
        res.public_id;
      return { item, response, status, headers };
    };
  }

  ngOnInit() {
  }

  upload() {
    this.uploader.uploadAll();
  }
}
