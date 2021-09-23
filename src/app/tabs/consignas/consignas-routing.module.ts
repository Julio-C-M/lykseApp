import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignasPage } from './consignas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsignasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsignasPageRoutingModule {}
