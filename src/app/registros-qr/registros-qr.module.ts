import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosQrPageRoutingModule } from './registros-qr-routing.module';

import { RegistrosQrPage } from './registros-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosQrPageRoutingModule
  ],
  declarations: [RegistrosQrPage]
})
export class RegistrosQrPageModule {}
