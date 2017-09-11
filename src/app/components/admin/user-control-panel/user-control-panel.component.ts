import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() block = new EventEmitter<boolean>();
  onSubmitBlock(increased) {
    this.block.emit(increased);
  }
}
