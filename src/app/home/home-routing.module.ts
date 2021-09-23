import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
 // {
   // path: 'perfil-guardia',
  //loadChildren: () => import('./home.module').then( m => m.HomePageModule)
  
   {
     path: 'perfil-cliente',
     loadChildren: () => import('./perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
   },
   {
    path: 'perfil-guardia',
    loadChildren: () => import('./perfil-guardia/perfil-guardia.module').then( m => m.PerfilGuardiaPageModule)
  },
   {
     path: 'datos-perfiles',
     loadChildren: () => import('./datos-perfiles/datos-perfiles.module').then( m => m.DatosPerfilesPageModule)
   },
   {
    path: '',
    redirectTo: '/tabs/home/perfil-guardia',
    pathMatch: 'full'
  }
  
   
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
