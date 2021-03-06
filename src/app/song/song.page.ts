// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { Component, OnInit } from '@angular/core';
import { Router,RouterEvent } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SongService } from '../services/song.service';


@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})

export class SongPage implements OnInit {
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
  songForm: FormGroup;

  constructor(
    private aptService: SongService,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.router.events.subscribe((event: RouterEvent) => 
    {       this.activePath = event.url       
    })  
  }
  

  ngOnInit() {
    this.songForm = this.fb.group({
      title: [''],
      band: [''],
      lyrics: ['']
    })
  }
  // Creating a new song by form
  formSubmit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.aptService.createSong(this.songForm.value).then(res => {
        console.log(res)
        this.songForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
  

}

