import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {FileUploadModule} from "ng2-file-upload";
import {Ng2FileDropModule} from "ng2-file-drop";
import {AuthService} from "./components/auth/auth.service";
import {AuthModule} from "./components/auth/auth.module";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {ConfirmComponent} from "./components/header/confirm.component";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PaymentComponent } from './components/payment/payment.component';
import {ProjectService} from "./components/project/project.service";
import {SearchModule} from "./components/search/search.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BootstrapModalModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    Ng2FileDropModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    SearchModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthService,
    ProjectService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent
  ]
})
export class AppModule { }
