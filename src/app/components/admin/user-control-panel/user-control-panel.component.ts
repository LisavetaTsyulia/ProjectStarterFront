import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-user-control-panel',
  templateUrl: './user-control-panel.component.html',
  styleUrls: ['./user-control-panel.component.css']
})
export class UserControlPanelComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    this.authService.block();
      // .flatMap(data => {
      //   return this.authService.getMe();
      // })
      // .subscribe(
      //   data => {
      //     localStorage.setItem('user', JSON.stringify(data));
      //     this.router.navigate([this.returnUrl]);
      //   },
      //   error => {
      //     this.submitted = false;
      //     this.errorMessage = error.json().message;
      //   }
      // );
  }
}
