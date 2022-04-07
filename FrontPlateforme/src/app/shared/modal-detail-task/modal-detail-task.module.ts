import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ModalDetailTaskComponent } from "./modal-detail-task.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpLoaderFactory } from "src/app/app.module";
import { HttpClient } from "@angular/common/http";
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

@NgModule({
    declarations: [
        ModalDetailTaskComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DialogModule,
        TagModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })
    ],
    exports: [
        ModalDetailTaskComponent
    ],
    providers: [ModalDetailTaskComponent],
})
export class ModalDetailTaskModule{}
