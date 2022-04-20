import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { DetailsProjectComponent } from "./details-project/details-project.component";
import { HomeComponent } from "./home/home.component";
import { SearchProjectComponent } from "./search-project/search-project.component";
import { ProfilUserComponent } from "./profil-user/profil-user.component";
import { SignInPageComponent } from "./sign-in-page/sign-in-page.component";
import { AuthGuardService } from './services/auth-guard.service';
import { EditProjectComponent } from "./edit-project/edit-project.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "newproject", component: CreateProjectComponent,  canActivate: [AuthGuardService] },
    { path: "project/:name", component: DetailsProjectComponent },
    { path: "searchproject", component: SearchProjectComponent },
    { path: "profiluser", component: ProfilUserComponent, canActivate: [AuthGuardService] },
    { path: "login", component: SignInPageComponent },
    { path: "editProject/:name", component: EditProjectComponent, canActivate: [AuthGuardService] },

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
