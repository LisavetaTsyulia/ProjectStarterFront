import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-user-control-panel',
  templateUrl: './user-control-panel.component.html',
  styleUrls: ['./user-control-panel.component.css']
})
export class UserControlPanelComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {
  }

  @Output() block = new EventEmitter<boolean>();
  onSubmitBlock(increased) {
    this.block.emit(increased);
  }
  @Output() unblock = new EventEmitter<boolean>();
  onSubmitUnblock(increased) {
    this.unblock.emit(increased);
  }
}
