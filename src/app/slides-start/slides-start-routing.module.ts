import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesStartPage } from './slides-start.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesStartPageRoutingModule {}
