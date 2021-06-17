import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GunsPageRoutingModule } from './guns-routing.module';

import { GunsPage } from './guns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GunsPageRoutingModule
  ],
  declarations: [GunsPage]
})
export class GunsPageModule {}
