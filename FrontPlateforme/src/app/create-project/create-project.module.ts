import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { CreateProjectComponent } from "./create-project.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TagInputModule} from "ngx-chips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
    declarations: [
        CreateProjectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TagInputModule,
        BrowserAnimationsModule,
        AutoCompleteModule
    ],
    providers: [],
    bootstrap: [CreateProjectComponent]
})
export class CreateProjectModule{}
