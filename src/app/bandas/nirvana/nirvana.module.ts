import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NirvanaPageRoutingModule } from './nirvana-routing.module';

import { NirvanaPage } from './nirvana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NirvanaPageRoutingModule
  ],
  declarations: [NirvanaPage]
})
export class NirvanaPageModule {}
