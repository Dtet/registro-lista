import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('@modules/facultative-form/facultative-form.module').then(m => m.FacultativeFormModule)
  },
  {
    path: 'list',
    loadChildren: () => import('@modules/facultative-list/facultative-list.module').then(m => m.FacultativeListModule)
  },
  {
    path: '**',
    redirectTo: '/form' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultativeFormRoutingModule { }
