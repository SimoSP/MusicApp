import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongPageRoutingModule } from './song-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { SongPage } from './song.page';
const routes: Routes = [
  {     
    path: 'Song',    
    component: SongPage,    
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
    SongPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SongPage]
})
export class SongPageModule {}
