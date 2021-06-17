import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NirvanaPage } from './nirvana.page';

const routes: Routes = [
  {
    path: '',
    component: NirvanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NirvanaPageRoutingModule {}
