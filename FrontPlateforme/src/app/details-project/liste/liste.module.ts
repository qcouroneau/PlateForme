import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableModule } from "primeng/table";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ListeComponent } from "./liste.component";

@NgModule({
    declarations: [
        ListeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TableModule
    ],
    exports: [
        ListeComponent
    ],
    providers: [],
})
export class ListeModule{}