import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-winning-vote-info',
  standalone: true,
  imports: [],
  templateUrl: './winning-vote-info.component.html',
  styleUrl: './winning-vote-info.component.scss'
})
export class WinningVoteInfoComponent {
  @Input() winningVoteCount!: number | null;
}
