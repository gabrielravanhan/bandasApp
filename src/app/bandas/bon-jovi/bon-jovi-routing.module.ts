import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonJoviPage } from './bon-jovi.page';

const routes: Routes = [
  {
    path: '',
    component: BonJoviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonJoviPageRoutingModule {}
