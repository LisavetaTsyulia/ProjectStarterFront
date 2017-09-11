import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";
import {User} from "../../user/user";

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

  fillEmailsArray() {
    this.emails = [];
    for (let user of this.allUsers) {
      let curUser: User = <User>user;
      if (curUser.isSelected == true)
        this.emails[this.emails.length] = curUser.email;
    }
  }

  block() {
    this.fillEmailsArray();
    console.log(this.emails);
    this.authService.block(this.emails);
    this.loadUsersToTable();
  }
}
