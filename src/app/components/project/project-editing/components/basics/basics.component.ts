import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Project} from '../../../../model/project';
import { Ng2FileDropAcceptedFile } from 'ng2-file-drop';
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

  constructor() {
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.project.imageUrl = 'https://res.cloudinary.com/project-starter/image/upload/v1505240342/' +
        res.public_id;
      return { item, response, status, headers };
    };
  }

  ngOnInit() {
  }

  onChange() {
    this.onUpload.emit(this.uploader);
  }

  upload() {
    this.uploader.uploadAll();
  }

  onDateChange(event) {
    this.project.endDate = event;
  }

  // File being dragged has been dropped and is valid
  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    console.log(acceptedFile);
    this.onUpload.emit(this.uploader);
  }
}
