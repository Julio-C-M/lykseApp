import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  
  {
    path: 'slides-start',
    loadChildren: () => import('./slides-start/slides-start.module').then( m => m.SlidesStartPageModule)
  },
  {
    path: 'panico',
    loadChildren: () => import('./tabs/panico/panico.module').then( m => m.PanicoPageModule)
  },
  {
    path: 'consignas',
    loadChildren: () => import('./tabs/consignas/consignas.module').then( m => m.ConsignasPageModule)
  },
  {
    path: 'claves',
    loadChildren: () => import('./tabs/claves/claves.module').then( m => m.ClavesPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./tabs/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },  {
    path: 'registros-qr',
    loadChildren: () => import('./registros-qr/registros-qr.module').then( m => m.RegistrosQrPageModule)
  },

  


 
  
     
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
