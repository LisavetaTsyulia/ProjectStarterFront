import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-user-control-panel',
  templateUrl: './user-control-panel.component.html',
  styleUrls: ['./user-control-panel.component.css']
})
export class UserControlPanelComponent implements OnInit {

  public checkboxComments : boolean = false;
  public checkboxProjects : boolean = false;
  public checkboxRatings : boolean = false;
  constructor(
  ) {}

  ngOnInit() {
  }

  @Output() block = new EventEmitter<boolean>();
  onSubmitBlock(increased) {
    this.block.emit(increased);
  }
  @Output() unblock = new EventEmitter<boolean>();
  onSubmitUnblock(increased) {
    this.unblock.emit(increased);
  }
  @Output() confirm = new EventEmitter<boolean>();
  onSubmitConfirm(increased) {
    this.confirm.emit(increased);
  }
  @Output() deleteEvent = new EventEmitter<any>();
  onSubmitDelete(increased) {
    this.deleteEvent.emit({ event:event, comments: this.checkboxComments,
      ratings: this.checkboxRatings, projects: this.checkboxProjects });
  }
}
