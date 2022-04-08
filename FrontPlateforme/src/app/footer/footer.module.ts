import { NgModule } from "@angular/core";
import {FooterComponent} from "./footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {DividerModule} from 'primeng/divider';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../app.module";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DividerModule,
    AppRoutingModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  exports: [
    FooterComponent
  ],
  bootstrap: [FooterComponent]
})
export class FooterModule{}
