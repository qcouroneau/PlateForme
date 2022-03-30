import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule{}
