import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GunsPage } from './guns.page';

const routes: Routes = [
  {
    path: '',
    component: GunsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GunsPageRoutingModule {}
