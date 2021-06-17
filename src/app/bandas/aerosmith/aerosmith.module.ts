import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AerosmithPageRoutingModule } from './aerosmith-routing.module';

import { AerosmithPage } from './aerosmith.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AerosmithPageRoutingModule
  ],
  declarations: [AerosmithPage]
})
export class AerosmithPageModule {}
