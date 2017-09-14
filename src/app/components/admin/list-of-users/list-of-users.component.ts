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
    let theRole: string;
    if (role === "All Users") return;
    if (role === "Confirmed Users") theRole = 'ROLE_CONFIRMED_USER';
    else if (role === "Users to Confirm") theRole = 'ROLE_USER';
    else if (role === "Administrators") theRole = 'ROLE_ADMIN';
    
  }

  sort(by: string) {
    console.log(by);
  }
}
