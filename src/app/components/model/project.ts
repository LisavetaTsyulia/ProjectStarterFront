export class Project {
  public id: number;
  public userId: number;
  public title: string;
  public description: string;
  public targetAmount: number;
  public currentAmount: number;
  public rating: number;
  public status: string;
  public startDate: Date;
  public endDate: Date;
  public projectStatus: string;
  public imageUrl: string;
  public donateMin: number;
  public amountOfDonates: number;
  public amountOfRatings: number;
  public tags: string[];
}
