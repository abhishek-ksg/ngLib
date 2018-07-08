import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';

import { Show, TvmazeService } from 'tvmaze';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private tvMaze: TvmazeService) {
    this.show$ = this.tvMaze.getShow(336);
  }
}
