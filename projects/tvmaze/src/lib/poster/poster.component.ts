import { Image } from './../tvmaze.models';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { TvmazeService } from './../tvmaze.service';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvMazeService: TvmazeService) { }

  ngOnInit() {
    this.posterUrl$ = this.tvMazeService
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }

}
