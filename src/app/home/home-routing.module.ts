import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
 // {
   // path: 'perfil-guardia',
    //loadChildren: () => import('./home.module').then( m => m.HomePageModule)
  //},
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },  {
    path: 'datos-perfiles',
    loadChildren: () => import('./datos-perfiles/datos-perfiles.module').then( m => m.DatosPerfilesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
