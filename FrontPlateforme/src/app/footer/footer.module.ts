import { NgModule } from "@angular/core";
import {FooterComponent} from "./footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {DividerModule} from 'primeng/divider';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DividerModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  exports: [
    FooterComponent
  ],
  bootstrap: [FooterComponent]
})
export class FooterModule{}
