import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongInfoBlockComponent } from '../../components/song-info-block/song-info-block.component';
import { NextHitComponent } from '../../components/next-hit/next-hit.component';
import { AdBlockComponent } from '../../components/ad-block/ad-block.component';

@Component({
  selector: 'app-streaming-view',
  standalone: true,
  imports: [SongInfoBlockComponent, NextHitComponent, AdBlockComponent],
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
