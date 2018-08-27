import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { RouterModule } from '@angular/router';
// Importar rutas
import { ROUTES } from './app.routes';

import { EditarObraComponent } from './components/editar-obra/editar-obra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    AdministracionComponent,
    CapitulosComponent,
    EditarObraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
