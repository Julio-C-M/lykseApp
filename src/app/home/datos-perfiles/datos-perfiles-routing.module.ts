import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPerfilesPage } from './datos-perfiles.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPerfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPerfilesPageRoutingModule {}
