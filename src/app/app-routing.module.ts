import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'guns',
    loadChildren: () => import('./bandas/guns/guns.module').then( m => m.GunsPageModule)
  },
  {
    path: 'aerosmith',
    loadChildren: () => import('./bandas/aerosmith/aerosmith.module').then( m => m.AerosmithPageModule)
  },
  {
    path: 'bon-jovi',
    loadChildren: () => import('./bandas/bon-jovi/bon-jovi.module').then( m => m.BonJoviPageModule)
  },
  {
    path: 'nirvana',
    loadChildren: () => import('./bandas/nirvana/nirvana.module').then( m => m.NirvanaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
