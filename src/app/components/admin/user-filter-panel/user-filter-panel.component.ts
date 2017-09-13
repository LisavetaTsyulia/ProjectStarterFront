import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-filter-panel',
  templateUrl: './user-filter-panel.component.html',
  styleUrls: ['./user-filter-panel.component.css']
})
export class UserFilterPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() sort = new EventEmitter<any>();
  onClickSort(by: string) {
    this.sort.emit({event:event,by: by});
  }
  @Output() sortByRole = new EventEmitter<any>();
  onClickSortByRole(role: string) {
    this.sortByRole.emit({event:event,role: role});
  }
}
