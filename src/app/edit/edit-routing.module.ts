// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPage } from './edit.page';

const routes: Routes = [
  {
    path: '',
    component: EditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPageRoutingModule {}
