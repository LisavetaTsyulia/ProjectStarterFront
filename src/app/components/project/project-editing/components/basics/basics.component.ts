import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../model/project';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @Input() project: Project;

  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

}
