// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';

const routes: Routes = [
     {     
       path: 'menu',    
       component: MenuPage,    
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
    MenuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
