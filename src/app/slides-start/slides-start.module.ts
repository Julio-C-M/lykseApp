import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesStartPageRoutingModule } from './slides-start-routing.module';

import { SlidesStartPage } from './slides-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesStartPageRoutingModule
  ],
  declarations: [SlidesStartPage]
})
export class SlidesStartPageModule {}
