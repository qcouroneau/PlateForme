import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { CreateProjectComponent } from "./create-project.component";


@NgModule({
    declarations: [
        CreateProjectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [CreateProjectComponent]
})
export class CreateProjectModule{}
