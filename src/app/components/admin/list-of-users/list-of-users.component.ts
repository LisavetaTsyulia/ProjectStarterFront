import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../user/user";

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  users : User[];
  check : string;
  returnUrl : string;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.authService.getAll().do(res => {this.check = JSON.stringify(res)})
      .subscribe(
        data => {
          localStorage.setItem('resp', JSON.stringify(data));
        }
      );
  }

}
