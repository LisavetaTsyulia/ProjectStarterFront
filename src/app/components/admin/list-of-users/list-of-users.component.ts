import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user';
import {AdminService} from '../admin.service';
import {DialogService} from 'ng2-bootstrap-modal';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';
import 'rxjs';


@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})

export class ListOfUsersComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) { }

  keysArray: string[];
  allUsers: object[];
  theRole: string;
  returnUrl: string;
  emails: string[];
  confirmResult: boolean = false;
  passportScan: string;

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
    if (this.isWaiting(user)) {
      this.loadPassportScan(user['email']);
      setTimeout(() => {
          this.dialogService.addDialog(ConfirmModalComponent, {
          passportScan : this.passportScan,
          email : user['email']
        })
          .subscribe((isConfirmed) => {
            this.confirmResult = isConfirmed;
            setTimeout(() => {this.loadUsersToTable()}, 300);
          });
        }, 3000);

    } else {
      user.isSelected = !user.isSelected;
    }
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
      if (curUser.isSelected === true) {
        this.emails[this.emails.length] = curUser.email;
      }
    }
  }

  block() {
    this.fillEmailsArrayBlock();
    console.log(this.emails);
    if (this.emails.length != 0) {
      this.adminService.block(this.emails);
      setTimeout(()=>{this.loadUsersToTable()}, 1000);
    }
  }
  unblock() {
    this.fillEmailsArrayBlock();
    console.log(this.emails);
    if (this.emails.length != 0) {
      this.adminService.unblock(this.emails);
      setTimeout(() => {this.loadUsersToTable()}, 1000);
    }
  }
  deleteEvent(comments: boolean, ratings: boolean, projects: boolean ) {
    console.log(comments + " : Comments; " + ratings + " : Rating; " + projects + " : Projects; ");
    let checkboxSettings : boolean[] = [comments, ratings, projects];
    this.fillEmailsArrayBlock();
    if (this.emails.length != 0) {
      this.adminService.deleteEvent(this.emails, checkboxSettings);
      setTimeout(()=>{this.loadUsersToTable()}, 1000);
    }
  }

  sortByRole(role: string) {
    console.log(role);
    if (role === "All Users" || role === "Все Пользователи") {
      this.theRole = null;
      return this.loadUsersToTable();
    } else if (role === "Confirmed Users" || role === "Подтвержденные") this.theRole = 'ROLE_CONFIRMED_USER';
    else if (role === "Users to Confirm" || role === "Подавшие Заявку") this.theRole = 'ROLE_WAIT_CONFIRM';
    else if (role === "Administrators" || role === "Администраторы") this.theRole = 'ROLE_ADMIN';
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
    if (by == "Без Сортировки") by = "None";
    else if (by == "Кол-во Проектов") by = "Amount Of Projects";
    else if (by == "Дата Регистрации") by = "Registration Date";
    else if (by == "Время Последнего Логина") by = "Last Login";
    else if (by == "Статус") by = "Status";

    this.adminService.sortBy(by, this.theRole)
      .flatMap(res => {
        this.keysArray = Object.keys(res[0]);
        console.log(res['role']);
        res.role = res['role'];
        res.isSelected = false;
        return this.allUsers = res;
      })
      .subscribe(
        data => {
        }
      );
  }


  loadPassportScan(email: string) {
    this.passportScan = null;
    this.adminService.getPassportScan(email)
        .subscribe(
          data => {
            this.passportScan = data['passportScan'];
          }
        );
  }
}
