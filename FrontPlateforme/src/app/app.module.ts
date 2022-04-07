import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderModule} from "./header/header.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeModule } from './home/home.module';
import { CreateProjectModule } from './create-project/create-project.module';
import { DetailsProjectModule } from './details-project/details-project.module';
import { SearchProjectModule } from './search-project/search-project.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    CreateProjectModule,
    DetailsProjectModule,
    HomeModule,
    SearchProjectModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
