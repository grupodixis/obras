import { Routes } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EditarObraComponent } from './components/editar-obra/editar-obra.component';



export const ROUTES: Routes = [
    { path: 'administracion', component: AdministracionComponent },
    { path: 'capitulos/:id', component: CapitulosComponent },
    { path: 'obras', component: PrincipalComponent },
    { path: 'editar/:id', component: EditarObraComponent },
    { path: '', pathMatch: 'full', redirectTo: 'obras' },
    { path: '**', pathMatch: 'full', redirectTo: 'obras' }
];
