import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeModule } from './home/home.module';
import { CreateProjectModule } from './create-project/create-project.module';
import { DetailsProjectModule } from './details-project/details-project.module';
import { ModalTaskModule } from './shared/modal-task/modal-task.module';
import { SearchProjectModule } from './search-project/search-project.module';
import { AuthInterceptor } from './helper/auth.interceptor';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { AutoCompleteModule } from "primeng/autocomplete";
import { DropdownModule } from "primeng/dropdown";
import { SignInPageModule } from './sign-in-page/sign-in-page.module';
import { AuthGuardService } from './services/auth-guard.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ProfilUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    CreateProjectModule,
    DetailsProjectModule,
    ModalTaskModule,
    HomeModule,
    SearchProjectModule,
    SignInPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TagModule,
    ButtonModule,
    DataViewModule,
    AutoCompleteModule,
    DropdownModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthGuardService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
