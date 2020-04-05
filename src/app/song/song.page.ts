import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SongService } from '../services/song.service';


@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})

export class SongPage implements OnInit {
  songForm: FormGroup;

  constructor(
    private aptService: SongService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.songForm = this.fb.group({
      title: [''],
      band: [''],
      lyrics: ['']
    })
  }
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

