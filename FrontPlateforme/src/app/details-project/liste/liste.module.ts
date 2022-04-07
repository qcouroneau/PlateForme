import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableModule } from "primeng/table";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ListeComponent } from "./liste.component";
import { CheckboxModule } from 'primeng/checkbox';
import { ModalDetailTaskModule } from "./modal-detail-task/modal-detail-task.module";

@NgModule({
    declarations: [
        ListeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TableModule,
        CheckboxModule,
        ModalDetailTaskModule
    ],
    exports: [
        ListeComponent
    ],
    providers: [],
})
export class ListeModule{}
