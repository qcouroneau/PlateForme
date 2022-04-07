import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { DetailsProjectComponent } from "./details-project.component";
import { TableModule } from 'primeng/table';
import { ListeModule } from "./liste/liste.module";
import { TagModule } from 'primeng/tag';

@NgModule({
    declarations: [
        DetailsProjectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        TableModule,
        ListeModule,
        TagModule
    ],
    providers: []
})
export class DetailsProjectModule {}
