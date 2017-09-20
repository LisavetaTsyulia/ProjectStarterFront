import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project/project.service';
import {Project} from '../model/project';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  searchRequest = '';
  projects: Project[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.searchRequest = params['search_request'];
        this.getProjects();
      });
  }

  getProjects() {
    console.log(this.searchRequest);
    this.projectService.search(this.searchRequest).subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    });
  }

  search() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
