import { Component } from '@angular/core';
import { NextSongComponent } from '../next-song/next-song.component';

@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [NextSongComponent],
  templateUrl: './songs-list.component.html',
  styleUrl: './songs-list.component.scss'
})
export class SongsListComponent {

}
