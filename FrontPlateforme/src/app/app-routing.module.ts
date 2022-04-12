import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountCreationComponent } from "./account-creation/account-creation.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { DetailsProjectComponent } from "./details-project/details-project.component";
import { HomeComponent } from "./home/home.component";
import {SearchProjectComponent} from "./search-project/search-project.component";
import {ProfilUserComponent} from "./profil-user/profil-user.component";

const routes : Routes = [
    { path: "home", component: HomeComponent },
    { path: "newproject", component: CreateProjectComponent },
    { path: "project/:name", component: DetailsProjectComponent },
    { path: "searchproject", component: SearchProjectComponent},
    { path: "accountcreation", component: AccountCreationComponent},
    { path: "profiluser", component: ProfilUserComponent},

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
