import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home.component";
import {DataViewModule} from 'primeng/dataview';
import { ButtonModule } from "primeng/button";
import {DialogModule} from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

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
        TagModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule{}
