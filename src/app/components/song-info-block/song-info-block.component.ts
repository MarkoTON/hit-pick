import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { WinningVoteInfoComponent } from '../winning-vote-info/winning-vote-info.component';

@Component({
  selector: 'app-song-info-block',
  standalone: true,
  imports: [MatCardModule, WinningVoteInfoComponent],
  templateUrl: './song-info-block.component.html',
  styleUrl: './song-info-block.component.scss'
})
export class SongInfoBlockComponent {

}
