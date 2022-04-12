import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { AccountCreationComponent } from "./account-creation.component";
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
@NgModule({
    declarations: [
        AccountCreationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        DataViewModule,
        ButtonModule,
        DialogModule,
        TagModule,
        InputTextModule,
        PasswordModule,
        CardModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })
    ],
    providers: [],
    bootstrap: [AccountCreationComponent]
})
export class AccountCreationModule{}
