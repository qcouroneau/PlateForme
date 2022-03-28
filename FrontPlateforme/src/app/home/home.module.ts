import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule{}
