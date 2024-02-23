import { Routes } from '@angular/router';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { MesAnimauxComponent } from './mes-animaux/mes-animaux.component';


export const routes: Routes = [
    {path: '', component:TableauDeBordComponent},
    {path: 'tableau-de-bord', component:TableauDeBordComponent},
    {path:'mes-animaux', component:MesAnimauxComponent},


];
