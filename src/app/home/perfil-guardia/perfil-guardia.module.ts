import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilGuardiaPageRoutingModule } from './perfil-guardia-routing.module';

import { PerfilGuardiaPage } from './perfil-guardia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilGuardiaPageRoutingModule
  ],
  declarations: [PerfilGuardiaPage]
})
export class PerfilGuardiaPageModule {}
