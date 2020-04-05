import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
const routes: Routes = [
  {     
    path: 'about',    
    component: AboutPage,    
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
    AboutPageRoutingModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
