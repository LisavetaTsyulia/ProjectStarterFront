import {DatePipe} from '@angular/common';

export class Project {
  public id: number;
  public userId: number;
  public title: string;
  public description: string;
  public targetAmount: number;
  public currentAmount: number;
  public rating: number;
  public startDate: DatePipe ;
  public endDate: DatePipe ;
  public projectStatus: string;
}
