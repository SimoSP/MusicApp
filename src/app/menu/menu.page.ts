import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  activePath = '';   
  pages = [     
    {      
      name: 'Home',
      path: '/menu/home'    
    },    
    {      
      name: 'About',      
      path: '/menu/about'    
    },    
    {      
      name: 'List',      
      path: '/menu/list'    
    },    
    {      
      name: 'Song',       
      path: '/menu/song'   
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
