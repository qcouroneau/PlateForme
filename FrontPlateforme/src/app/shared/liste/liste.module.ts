import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableModule } from "primeng/table";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ListeComponent } from "./liste.component";
import { CheckboxModule } from 'primeng/checkbox';
import { ModalDetailTaskModule } from "../modal-detail-task/modal-detail-task.module";
import { HttpLoaderFactory } from "src/app/app.module";
import { HttpClient } from "@angular/common/http";

@NgModule({
    declarations: [
        ListeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TableModule,
        CheckboxModule,
        ModalDetailTaskModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })
    ],
    exports: [
        ListeComponent
    ],
    providers: [],
})
export class ListeModule{}
