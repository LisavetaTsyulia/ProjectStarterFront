import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../user/user";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})

export class ListOfUsersComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  keysArray : string[];
  allUsers : object[];
  returnUrl : string;
  emails : string[];

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loadUsersToTable();
  }

  loadUsersToTable() {
    this.authService.getAll()
      .flatMap(res => {
        // const usersJson: any[] = Array.of(res.json());
        this.keysArray = Object.keys(res[0]);
        res.isSelected = false;
        return this.allUsers = res;
      })
      .subscribe(
        data => {
          localStorage.setItem('resp', JSON.stringify(data));
        }
      );
  }

  onSelect(user: any): void {
    user.isSelected = !user.isSelected;
  }

  isSelected(user: any): boolean {
    return user.isSelected;
  }

  fillEmailsArrayBlock() {
    this.emails = [];
    for (let user of this.allUsers) {
      let curUser: User = <User>user;
      if (curUser.isSelected == true)
        this.emails[this.emails.length] = curUser.email;
    }
  }

  block() {
    this.fillEmailsArrayBlock();
    console.log(this.emails);
    if (this.emails.length != 0) {
      this.authService.block(this.emails);
      setTimeout(()=>{this.loadUsersToTable()}, 300);
    }
  }
  unblock() {
    this.fillEmailsArrayBlock();
    console.log(this.emails);
    if (this.emails.length != 0) {
      this.authService.unblock(this.emails);
      setTimeout(()=>{this.loadUsersToTable()}, 300);
    }
  }
  deleteEvent(comments: boolean, ratings: boolean, projects: boolean ) {
    console.log(comments + " : Comments; " + ratings + " : Rating; " + projects + " : Projects; ");
    let checkboxSettings : boolean[] = [comments, ratings, projects];
    this.fillEmailsArrayBlock();
    if (this.emails.length != 0) {
      this.authService.deleteEvent(this.emails, checkboxSettings);
      setTimeout(()=>{this.loadUsersToTable()}, 300);
    }
  }
}
