import {Component, OnInit, ViewChild} from '@angular/core';
import {ListOfUsersComponent} from "../list-of-users/list-of-users.component";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(ListOfUsersComponent) listOfUsers: ListOfUsersComponent;
  block(increased){
    this.listOfUsers.block();
  }
  unblock(increased){
    this.listOfUsers.unblock();
  }
  deleteEvent(event){
    this.listOfUsers.deleteEvent(event.comments, event.projects, event.ratings);
  }
}
