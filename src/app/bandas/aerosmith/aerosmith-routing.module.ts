import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AerosmithPage } from './aerosmith.page';

const routes: Routes = [
  {
    path: '',
    component: AerosmithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerosmithPageRoutingModule {}
