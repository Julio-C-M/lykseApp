import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosQrPage } from './registros-qr.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosQrPageRoutingModule {}
