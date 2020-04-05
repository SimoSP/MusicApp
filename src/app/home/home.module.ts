import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
const routes: Routes = [
  {     
    path: 'menu',    
    component: HomePage,    
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
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
