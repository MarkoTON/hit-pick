import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-indicator',
  standalone: true,
  imports: [],
  templateUrl: './vote-indicator.component.html',
  styleUrl: './vote-indicator.component.scss'
})
export class VoteIndicatorComponent {
  @Input() vote!: number | null;
}
