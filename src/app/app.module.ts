import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {UserCreatorModal} from "./components/header/user-creator-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap/src/bootstrap";
import {ModalModule} from "angular2-modal";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {FileUploadModule} from "ng2-file-upload";
import {Ng2FileDropModule} from "ng2-file-drop";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserCreatorModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BootstrapModalModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    Ng2FileDropModule,
  ],
  providers: [ModalModule],
  bootstrap: [AppComponent],
  entryComponents: [ UserCreatorModal ]
})
export class AppModule { }
