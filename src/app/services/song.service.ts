// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058
// Song Service creates the songs in the database. Can be used also to modify them and delete them. Also fetch song/songs.
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


  // Create one song
  createSong(sng: Song) {
    return this.songListRef.push({
      title: sng.title,
      band: sng.band,
      lyrics: sng.lyrics,
    })
    
  }
  // Get one song by ID
  getSong(id: string) {
    this.songRef = this.db.object('/Songs/' + id);
    return this.songRef;
  }

  // Get song list
  getSongList() {
    this.songListRef = this.db.list('/Songs');
    return this.songListRef;
  }

  // Update song with new parameters
  updateSong(id, Song: Song) {
    return this.songRef.update({
        title: Song.title,
        band: Song.band,
        lyrics: Song.lyrics,
    })
  }

  // Delete song by ID
  deleteSong(id: string) {
    this.songRef = this.db.object('/Songs/' + id);
    this.songRef.remove();
  }
  private errorMgmt(error) {
    console.log(error)
  }
}