import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Project} from '../../../../model/project';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @Input() project: Project;
  @Output() onUpload = new EventEmitter<any>();

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'project-starter', uploadPreset: 'clbhkmd8' })
  );

  minDate = new Date();

  // date: DateModel = new DateModel;
  // options: DatePickerOptions;

  constructor() {
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.project.imageUrl = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' +
        res.public_id;
      return { item, response, status, headers };
    };
    // this.options = new DatePickerOptions();
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.project);

      // this.date.day = this.project.endDate.getDay + '';
      // this.date.month = this.project.endDate.getMonth + '';
      // this.date.year = this.project.endDate.getFullYear + '';
      // this.options.initialDate = this.project.endDate;
      }, 2000);
  }

  onChange() {
    this.onUpload.emit(this.uploader);
  }

  upload() {
    this.uploader.uploadAll();
  }
}
