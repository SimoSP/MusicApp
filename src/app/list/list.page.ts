import { Component, OnInit } from '@angular/core';
import { Song } from '../models/Song';
import { SongService } from './../services/song.service';
import { ActivatedRoute, Router,RouterEvent } from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
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
  Songs = [];

  constructor(
    private aptService: SongService,
    private router: Router,
  ) {
    this.router.events.subscribe((event: RouterEvent) => 
    {       this.activePath = event.url       
    })  
   }

  ngOnInit() {
    this.fetchSongs();
    let songRes = this.aptService.getSongList();
    songRes.snapshotChanges().subscribe(res => {
      this.Songs = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Songs.push(a as Song);
      })
    })
  }

  fetchSongs() {
    this.aptService.getSongList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteSongs(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteSong(id)
    }
  }
  
}