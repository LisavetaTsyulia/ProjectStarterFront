import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent) headerComponent : HeaderComponent;
  onlangChange() {
    this.headerComponent.setLang();
  }
}
