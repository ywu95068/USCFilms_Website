import { Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs';
import {Input} from '@angular/core';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-movie-carouel',
  templateUrl: './movie-carouel.component.html',
  styleUrls: ['./movie-carouel.component.css'],
  providers: [ServiceService]
})
export class MovieCarouelComponent implements OnInit {
  public screenwidth;
  @Input() popm: any;
  @Input() sId: any;
  // tslint:disable-next-line:variable-name
  @Input() media_type: any;
  constructor(public server: ServiceService) {
    this.screenwidth = window.innerWidth;
  }
  // tslint:disable-next-line:typedef
  addCountinue(tId, poster , titleName){
    const time = new Date();
    let tag;
    if ( this.media_type === 'movie'){
      tag = 'cm';
    }
    else{tag = 'ct'; }
    this.server.set(tag + tId, JSON.stringify({title: titleName, poster_path: poster, addTime: time }));
  }
  ngOnInit(): void {
    fromEvent(window, 'resize').subscribe((event) => { this.screenwidth = window.innerWidth; });
  }

}
