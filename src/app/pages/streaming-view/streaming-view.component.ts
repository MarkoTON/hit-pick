import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-streaming-view',
  standalone: true,
  imports: [],
  templateUrl: './streaming-view.component.html',
  styleUrl: './streaming-view.component.scss'
})
export class StreamingViewComponent {
  id!: number | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    console.log(this.route);
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
  }
}
