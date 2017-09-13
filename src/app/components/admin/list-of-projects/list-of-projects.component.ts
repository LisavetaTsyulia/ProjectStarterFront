import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-of-projects',
  templateUrl: './list-of-projects.component.html',
  styleUrls: ['./list-of-projects.component.css']
})
export class ListOfProjectsComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  keysArray : string[];
  check : object[];
  returnUrl : string;
  ids : string[];

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.authService.getAllProjects()
      .flatMap(res => {
        // const usersJson: any[] = Array.of(res.json());
        this.keysArray = Object.keys(res[0]);
        return this.check = res;
      })
      .subscribe(
        data => {
        }
      );
  }

  onSelect(project: any): void {
    this.ids.push(project.id);
  }

}
