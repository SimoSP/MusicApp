// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterEvent } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SongService } from './../services/song.service';
import { Song } from '../models/Song';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
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
    
  updateSongForm: FormGroup;
  id: any;
  Songs = [];

  constructor(
    private aptService: SongService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getSong(this.id).valueChanges().subscribe(res => {
      this.updateSongForm.setValue(res);
    });
    this.router.events.subscribe((event: RouterEvent) => 
    {       this.activePath = event.url       
    })  
   }
   

  ngOnInit() {
    this.updateSongForm = this.fb.group({
      title: [''],
      band: [''],
      lyrics: ['']
    })
    console.log(this.updateSongForm.value)
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
  // Update song
  updateForm() {
    this.aptService.updateSong(this.id, this.updateSongForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
  // Fetching songs from database
  fetchSongs() {
    this.aptService.getSong(this.id).valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  // Deleting song from database
  deleteSongs(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteSong(id)
    }
  }
  

}
