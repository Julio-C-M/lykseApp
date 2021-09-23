import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsignasPageRoutingModule } from './consignas-routing.module';

import { ConsignasPage } from './consignas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsignasPageRoutingModule
  ],
  declarations: [ConsignasPage]
})
export class ConsignasPageModule {}
