import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { DetailsProjectComponent } from "./details-project/details-project.component";
import { HomeComponent } from "./home/home.component";
import {SearchProjectComponent} from "./search-project/search-project.component";

const routes : Routes = [
    { path: "home", component: HomeComponent },
    { path: "newproject", component: CreateProjectComponent },
    { path: "project/:name", component: DetailsProjectComponent },
    { path: "searchproject", component: SearchProjectComponent},

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
