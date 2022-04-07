import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home.component";
import {DataViewModule} from 'primeng/dataview';
import { ButtonModule } from "primeng/button";
import {DialogModule} from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        DataViewModule,
        ButtonModule,
        DialogModule,
        TagModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule{}
