import { Component } from '@angular/core';
import { SongVoteIndicatorComponent } from '../song-vote-indicator/song-vote-indicator.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-next-song',
  standalone: true,
  imports: [SongVoteIndicatorComponent, MatCardModule],
  templateUrl: './next-song.component.html',
  styleUrl: './next-song.component.scss'
})
export class NextSongComponent {

}
