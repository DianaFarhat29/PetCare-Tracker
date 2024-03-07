import { Routes } from '@angular/router';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { MesAnimauxComponent } from './mes-animaux/mes-animaux.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AddOwnerComponent} from "./add-owner/add-owner.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./auth.guard";


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "admin", component: AdminComponent},
    {path: 'add-owner', component: AddOwnerComponent },
    {path: "home", component: HomeComponent},
    {path: 'tableau-de-bord', component:TableauDeBordComponent},
    {path:'mes-animaux', component:MesAnimauxComponent},
    {path:'mon-compte', component:MonCompteComponent},
];
