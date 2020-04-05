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
      path: '/home'    
    },    
    {      
      name: 'About',      
      path: '/about'    
    },    
    {      
      name: 'List',      
      path: '/list'    
    },    
    {      
      name: 'Song',       
      path: '/song'   
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
