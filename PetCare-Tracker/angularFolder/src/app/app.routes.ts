import {Routes} from '@angular/router';

import {TableauDeBordComponent} from './tableau-de-bord/tableau-de-bord.component';
import {MesAnimauxComponent} from './mes-animaux/mes-animaux.component';
import {HomeComponent} from "./home/home.component";
import {ModalComponent} from "./modal/modal.component";
import {ModalConnectionComponent} from "./modal-connection/modal-connection.component";
import {UserAddEditComponent} from "./user-add-edit/user-add-edit.component";
import {AddOwnerComponent} from "./add-owner/add-owner.component";


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "connection", component: ModalConnectionComponent},
  {path: "signin", component: ModalComponent},
  {path: "adminView", component: UserAddEditComponent},
  {path: 'add-owner', component: AddOwnerComponent },
  {path: "home", component: HomeComponent},
  {path: 'tableau-de-bord', component: TableauDeBordComponent},
  {path: 'mes-animaux', component: MesAnimauxComponent},

];
