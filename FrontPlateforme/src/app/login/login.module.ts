import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { LoginComponent } from "./login.component";
import {DataViewModule} from 'primeng/dataview';
import { ButtonModule } from "primeng/button";
import {DialogModule} from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        DataViewModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        DialogModule,
        TagModule,
        InputTextModule,
        PasswordModule,
        CardModule,
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
    bootstrap: [LoginComponent]
})
export class LoginModule{}
