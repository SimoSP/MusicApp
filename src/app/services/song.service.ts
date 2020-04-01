import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Song } from './../models/song';
import { Band } from './../models/band';

export class SongsService {
    private songListRef = this.db.list<Song>('song-list');
    private bandListRef = this.db.list<Band>('band-list');
    constructor(private db: AngularFireDatabase) {}

    getSongsList() {
        return this.songListRef;
    }
    filterBystring(Band:string) {
        return this.db.list('angular/fire/database')
    }
}