// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';

const routes: Routes = [
  {     
    path: 'menu',    
    component: EditPage,    
    children: [       
      {        
      path: 'home',         
      loadChildren: '../home/home.module#HomePageModule'      
     },
     {        
       path: 'song',         
       loadChildren: '../song/song.module#SongPageModule'      
      },
      {        
       path: 'about',         
       loadChildren: '../about/about.module#AboutPageModule'      
      },
      {        
       path: 'list',         
       loadChildren: '../list/list.module#ListPageModule'      
      }
   ]
 },
 {     
   path: '',       
   redirectTo: '/menu/home'
 }

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
