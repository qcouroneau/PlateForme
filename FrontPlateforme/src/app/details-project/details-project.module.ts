import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { DetailsProjectComponent } from "./details-project.component";



@NgModule({
    declarations: [
        DetailsProjectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [DetailsProjectComponent]
})
export class DetailsProjectModule
{}
