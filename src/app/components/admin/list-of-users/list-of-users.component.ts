import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  check : object[];
  returnUrl : string;
  emails : string[];

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.authService.getAll()
      .flatMap(res => {
        // const usersJson: any[] = Array.of(res.json());
        this.keysArray = Object.keys(res[0]);
        return this.check = res;
      })
      .subscribe(
        data => {
          localStorage.setItem('resp', JSON.stringify(data));
        }
      );
  }

  onSelect(user: any): void {
    this.emails.push(user.email);
  }

}
