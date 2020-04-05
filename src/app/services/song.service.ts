import { Injectable } from '@angular/core';
import { Song } from '../models/Song';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class SongService {
    
    songListRef: AngularFireList<any>;
    songRef: AngularFireObject<any>;
  

  constructor(private db: AngularFireDatabase) { }


  // Create
  createSong(sng: Song) {
    return this.songListRef.push({
      title: sng.title,
      band: sng.band,
      lyrics: sng.lyrics,
    })
    
  }
  // Get Single
  getSong(id: string) {
    this.songRef = this.db.object('/Songs/' + id);
    return this.songRef;
  }

  // Get List
  getSongList() {
    this.songListRef = this.db.list('/Songs');
    return this.songListRef;
  }

  // Update
  updateSong(id, Song: Song) {
    return this.songRef.update({
        title: Song.title,
        band: Song.band,
        lyrics: Song.lyrics,
    })
  }

  // Delete
  deleteSong(id: string) {
    this.songRef = this.db.object('/Songs/' + id);
    this.songRef.remove();
  }
  private errorMgmt(error) {
    console.log(error)
  }
}