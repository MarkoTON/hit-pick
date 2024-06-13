import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { QuickMenuComponent } from '../../components/quick-menu/quick-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-radio-stations',
  standalone: true,
  imports: [MatGridListModule, QuickMenuComponent, MatToolbarModule],
  templateUrl: './radio-stations.component.html',
  styleUrl: './radio-stations.component.scss'
})
export class RadioStationsComponent {

}
