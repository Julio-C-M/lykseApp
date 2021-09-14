import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPerfilesPageRoutingModule } from './datos-perfiles-routing.module';

import { DatosPerfilesPage } from './datos-perfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPerfilesPageRoutingModule
  ],
  declarations: [DatosPerfilesPage]
})
export class DatosPerfilesPageModule {}
