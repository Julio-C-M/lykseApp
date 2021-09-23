import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilGuardiaPage } from './perfil-guardia.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilGuardiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilGuardiaPageRoutingModule {}
