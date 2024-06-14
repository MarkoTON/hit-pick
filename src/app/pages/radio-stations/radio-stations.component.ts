import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { QuickMenuComponent } from '../../components/quick-menu/quick-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-radio-stations',
  standalone: true,
  imports: [MatGridListModule, MatToolbarModule, RouterLink, RouterModule],
  templateUrl: './radio-stations.component.html',
  styleUrl: './radio-stations.component.scss'
})
export class RadioStationsComponent {
  stations = [
    { id: 1, name: '\'60s' },
    { id: 2, name: '\'70s' },
    { id: 3, name: '\'80s' },
    { id: 4, name: '\'90s' },
    { id: 5, name: '\'00s' },
    { id: 6, name: '\'10s' },
    { id: 7, name: 'Rock' },
    { id: 8, name: 'Pop' },
    { id: 9, name: 'Metal' },
    { id: 10, name: 'R & B' },
    { id: 11, name: 'Rap' },
    { id: 12, name: 'Hip Hop' },
  ]
}
