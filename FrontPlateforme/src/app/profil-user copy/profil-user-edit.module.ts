import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/messages";
import { PasswordModule } from "primeng/password";
import { TagModule } from "primeng/tag";
import { AppRoutingModule } from "../app-routing.module";
import { HttpLoaderFactory } from "../app.module";
import { ProfilUserEditComponent } from "./profil-user-edit.component";

@NgModule({
  declarations: [
    ProfilUserEditComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      ButtonModule,
      FormsModule,
      ReactiveFormsModule,
      InputTextModule,
      PasswordModule,
      CardModule,
      TagModule,
      MessagesModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        })
  ],
  providers: [],
  bootstrap: [ProfilUserEditComponent]
})
export class ProfilUserEditMdule{}