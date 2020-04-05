import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

  constructor(private router: Router,public authService: AuthenticationService) {
    this.router.events.subscribe((event: RouterEvent) => 
    {       this.activePath = event.url       
    })  
  }

}
