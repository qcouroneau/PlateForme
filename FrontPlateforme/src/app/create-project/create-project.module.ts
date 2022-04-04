import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { CreateProjectComponent } from "./create-project.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TagInputModule} from "ngx-chips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";

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
        AutoCompleteModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        ButtonModule,
        MessagesModule,
        FileUploadModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })
    ],
    providers: [],
    bootstrap: [CreateProjectComponent]
})
export class CreateProjectModule{}
