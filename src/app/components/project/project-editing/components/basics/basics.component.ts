import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../model/project';
// import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @Input() project: Project;
  minDate = new Date();

  // date: DateModel = new DateModel;
  // options: DatePickerOptions;

  constructor() {
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

  onDateChange(date) {
    this.project.endDate = date;
  }
}
