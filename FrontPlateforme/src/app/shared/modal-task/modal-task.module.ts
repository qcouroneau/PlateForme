import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TagInputModule } from "ngx-chips";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MessagesModule } from "primeng/messages";
import { DialogModule } from 'primeng/dialog';
import { HttpLoaderFactory } from "../../app.module";
import { FormTaskComponent } from "./form-task/form-task.component";
import { ModalTaskComponent } from "./modal-task.component";

@NgModule({
  declarations: [
      ModalTaskComponent,
      FormTaskComponent
  ],
  imports: [
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
      DialogModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        })
  ],
  exports: [ModalTaskComponent],
  providers: [],
  bootstrap: [ModalTaskComponent]
})
export class ModalTaskModule{}