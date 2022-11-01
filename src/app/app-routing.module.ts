import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { EditarTrabajoComponent } from './components/editar-trabajo/editar-trabajo.component';

import { LandingComponent } from './landing/landing.component';
import { EditarEducacionComponent } from './components/editar-educacion/editar-educacion.component';
import { EditarHabilidadComponent } from './components/editar-habilidad/editar-habilidad.component';
import { EditarPorfolioComponent } from './components/editar-porfolio/editar-porfolio.component';
import { AgregarTrabajoComponent } from './components/agregar-trabajo/agregar-trabajo.component';
import { AgregarEducacionComponent } from './components/agregar-educacion/agregar-educacion.component';
import { AgregarSkillComponent } from './components/agregar-skill/agregar-skill.component';
import { AgregarPorfolioComponent } from './components/agregar-porfolio/agregar-porfolio.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RedirectComponent } from './components/redirect/redirect.component';


const routes: Routes = [
  {
    path:'',
    component: LandingComponent
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'redirect',
    component: RedirectComponent
  },
  {
    path:'edicion',
    component: EdicionComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'editar-perfil/:id',
        component:EditarPerfilComponent
      },
      {
        path:'editar-trabajo/:id',
        component:EditarTrabajoComponent
      },
      {
        path:'editar-educacion/:id',
        component:EditarEducacionComponent
      },
      {
        path:'editar-habilidad/:id',
        component: EditarHabilidadComponent
      },
      {
        path:'editar-porfolio/:id',
        component: EditarPorfolioComponent
      },
    ]
  },
  {
    path:'agregar',
    component: EdicionComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'agregar-trabajo',
        component: AgregarTrabajoComponent,
      },
      {
        path:'agregar-educacion',
        component: AgregarEducacionComponent
      },
      {
        path:'agregar-skill',
        component: AgregarSkillComponent
      },
      {
        path:'agregar-porfolio',
        component: AgregarPorfolioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
