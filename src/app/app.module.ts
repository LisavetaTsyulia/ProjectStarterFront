import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {UserCreatorModal} from "./components/header/user-creator-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap/src/bootstrap";
import {ModalModule} from "angular2-modal";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {FileUploadModule} from "ng2-file-upload";
import {Ng2FileDropModule} from "ng2-file-drop";
import {HttpModule} from "@angular/http";
import {AuthService} from "./components/auth/auth.service";
import {AuthModule} from "./components/auth/auth.module";

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
    ReactiveFormsModule,
    HttpModule,
    AuthModule
  ],
  providers: [
    ModalModule,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ UserCreatorModal ]
})
export class AppModule { }
