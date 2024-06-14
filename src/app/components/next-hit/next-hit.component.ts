import { Component } from '@angular/core';
import { SongsListComponent } from '../songs-list/songs-list.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-next-hit',
  standalone: true,
  imports: [SongsListComponent, MatCardModule],
  templateUrl: './next-hit.component.html',
  styleUrl: './next-hit.component.scss'
})
export class NextHitComponent {

}
