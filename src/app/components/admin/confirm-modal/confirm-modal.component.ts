import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import {environment} from "../../../../environments/environment";
import {AdminService} from "../admin.service";

export interface ConfirmModel {
  passportScan: string;
  email: string;
}

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})

export class ConfirmModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  email: string;
  passportScan: string;
  constructor(dialogService: DialogService, public http: Http, public adminService : AdminService) {
    super(dialogService);
  }


  confirm() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    this.http
      .post(
        `${environment.serverUrl}admin/confirm`,
        JSON.stringify({ email : this.email }),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .subscribe(
        data => {
        });
    this.result = true;
    this.close();
  }

  dismiss() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    this.http
      .post(
        `${environment.serverUrl}admin/dismiss`,
        JSON.stringify({ email : this.email }),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .subscribe(
        data => {
        });
    this.result = false;
    this.close();
  }

  ngOnInit() {
  }

}



