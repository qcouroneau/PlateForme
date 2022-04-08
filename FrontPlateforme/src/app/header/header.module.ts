import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {PrimeTemplate} from "primeng/api";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MenuModule
  ],
  providers: [
    PrimeTemplate,
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule{}
