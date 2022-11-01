import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
/* bootstrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModalComponent } from './shared/modal/modal.component';
import { HeroComponent } from './shared/hero/hero.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { MiExperienciaComponent } from './components/mi-experiencia/mi-experiencia.component';
import { MiEducacionComponent } from './components/mi-educacion/mi-educacion.component';
import { MisHabilidadesComponent } from './components/mis-habilidades/mis-habilidades.component';
import { MiPorfolioComponent } from './components/mi-porfolio/mi-porfolio.component';
import { FooterComponent } from './shared/footer/footer.component';


import { ColoresPipe } from './pipes/colores.pipe';
import { LandingComponent } from './landing/landing.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarTrabajoComponent } from './components/editar-trabajo/editar-trabajo.component';
import { EditarEducacionComponent } from './components/editar-educacion/editar-educacion.component';
import { EditarHabilidadComponent } from './components/editar-habilidad/editar-habilidad.component';
import { EditarPorfolioComponent } from './components/editar-porfolio/editar-porfolio.component';
import { AgregarTrabajoComponent } from './components/agregar-trabajo/agregar-trabajo.component';
import { AgregarEducacionComponent } from './components/agregar-educacion/agregar-educacion.component';
import { AgregarSkillComponent } from './components/agregar-skill/agregar-skill.component';
import { AgregarPorfolioComponent } from './components/agregar-porfolio/agregar-porfolio.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RedirectComponent } from './components/redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeroComponent,
    MiEducacionComponent,
    NavbarComponent,
    MiPerfilComponent,
    MiExperienciaComponent,
    MisHabilidadesComponent,
    MiPorfolioComponent,
    FooterComponent,
    ColoresPipe,
    EditarPerfilComponent,
    EditarTrabajoComponent,
    EditarEducacionComponent,
    EditarHabilidadComponent,
    EditarPorfolioComponent,
    AgregarTrabajoComponent,
    AgregarEducacionComponent,
    AgregarSkillComponent,
    AgregarPorfolioComponent,
    EdicionComponent,
    AgregarComponent,
    LoginPageComponent,
    LoginFormComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 14,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 200,
    })
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
