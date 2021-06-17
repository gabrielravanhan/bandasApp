import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonJoviPageRoutingModule } from './bon-jovi-routing.module';

import { BonJoviPage } from './bon-jovi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonJoviPageRoutingModule
  ],
  declarations: [BonJoviPage]
})
export class BonJoviPageModule {}
