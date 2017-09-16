import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user';
import {AdminService} from "../admin.service";


@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})

export class ListOfUsersComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  keysArray : string[];
  allUsers : object[];
  theRole : string;
  returnUrl : string;
  emails : string[];

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loadUsersToTable();
  }

  loadUsersToTable() {
    this.authService.getAll()
      .flatMap(res => {
        this.keysArray = Object.keys(res[0]);

        res.isSelected = false;
        return this.allUsers = res;
      })
      .subscribe(
        data => {
        }
      );
  }

  onSelect(user: any): void {
    user.isSelected = !user.isSelected;
  }

  isSelected(user: any): boolean {
    return user.isSelected;
  }

  isWaiting(user: any): boolean {
    return user.role === 'ROLE_WAIT_CONFIRM';
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
      this.adminService.block(this.emails);
      setTimeout(()=>{this.loadUsersToTable()}, 300);
    }
  }
  unblock() {
    this.fillEmailsArrayBlock();
    console.log(this.emails);
    if (this.emails.length != 0) {
      this.adminService.unblock(this.emails);
      setTimeout(()=>{this.loadUsersToTable()}, 300);
    }
  }
  deleteEvent(comments: boolean, ratings: boolean, projects: boolean ) {
    console.log(comments + " : Comments; " + ratings + " : Rating; " + projects + " : Projects; ");
    let checkboxSettings : boolean[] = [comments, ratings, projects];
    this.fillEmailsArrayBlock();
    if (this.emails.length != 0) {
      this.adminService.deleteEvent(this.emails, checkboxSettings);
      setTimeout(()=>{this.loadUsersToTable()}, 300);
    }
  }

  sortByRole(role: string) {
    console.log(role);
    if (role === "All Users") {
      this.theRole = null;
      return this.loadUsersToTable();
    } else if (role === "Confirmed Users") this.theRole = 'ROLE_CONFIRMED_USER';
    else if (role === "Users to Confirm") this.theRole = 'ROLE_WAIT_CONFIRM';
    else if (role === "Administrators") this.theRole = 'ROLE_ADMIN';
    this.adminService.sortByRole(this.theRole)
      .flatMap(res => {
      this.keysArray = Object.keys(res[0]);
      res.isSelected = false;
      return this.allUsers = res;
    })
      .subscribe(
        data => {
        }
      );

  }

  sort(by: string) {
    console.log(by);
    this.adminService.sortBy(by, this.theRole)
      .flatMap(res => {
        this.keysArray = Object.keys(res[0]);
        res.role = JSON.parse(res)['role'];
        res.isSelected = false;
        return this.allUsers = res;
      })
      .subscribe(
        data => {
        }
      );
  }
}
