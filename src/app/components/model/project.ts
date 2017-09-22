export class Project {
  public id: number;
  public userId: number;
  public title: string;
  public description: string;
  public targetAmount: number;
  public currentAmount: number;
  public rating: number;
  public startDate: Date;
  public endDate: Date;
  public projectStatus: string;
  public imageUrl: string;
  public amountOfDonates: number;
  public tags: string[];
}
