import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { HomeComponent } from "./home/home.component";

const routs : Routes = [
    {path: "home", component: HomeComponent},
    {path: "newproject", component: CreateProjectComponent},
    
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routs)],
    exports: [RouterModule]
})

export class AppRoutingModule { }