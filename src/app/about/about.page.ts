// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  activePath = '';   
  pages = [     
    {      
      name: 'Home',
      path: '/home'    
    },    
    {      
      name: 'About',      
      path: '/about'    
    },    
    {      
      name: 'Playlist',      
      path: '/list'    
    },    
    {      
      name: 'Add song',       
      path: '/song'   
     }  ,
     {      
      name: 'Edit song',       
      path: '/edit'   
     }  
    ]
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => 
    {       this.activePath = event.url       
    })  
   }

  ngOnInit() {
  }

}
