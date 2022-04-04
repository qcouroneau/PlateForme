import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SearchProjectComponent } from "./search-project.component";
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SearchProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DataViewModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [SearchProjectComponent]
})
export class SearchProjectModule{}
