import {Component, ModuleWithProviders, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {fromEvent, Observable} from 'rxjs';
import {routes} from '../../app.module';
import {NgModel} from '@angular/forms';
import {RouterModule} from '@angular/router';
// @ts-ignore
// @ts-ignore
import {MovieCarouelComponent} from '../movie-carouel/movie-carouel.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ServiceService]
})
export class HomepageComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  public screenwidth;
  public picdata: any;
  public countinue: any;
  public popm: any;
  public topm: any;
  public trenm: any;
  public poptv: any;
  public toptv: any;
  public trentv: any;
  // tslint:disable-next-line:variable-name
  public popular_movie = 'popular_movie';
  // tslint:disable-next-line:variable-name
  public trending_movie = 'trending_movie';
  // tslint:disable-next-line:variable-name
  public toorated_movie = 'toprated_movie';
  public list;
  public theId;
  public tId;
  public mediaType;
  public results = [];
  public tem;
  public result;
  public continueNormal = [];
  constructor(public server: ServiceService) {
    // tslint:disable-next-line:variable-name
    const _this = this;
    this.server.get_picsdata().subscribe(data => {_this.picdata = data; });
    this.server.get_popular_movie().subscribe(data => {_this.popm = data; });
    this.server.get_trending_movie().subscribe(data => {_this.trenm = data; });
    this.server.get_toprated_movie().subscribe(data => {_this.topm = data; });
    this.server.get_popular_tv().subscribe(data => {_this.poptv = data; });
    this.server.get_trending_tv().subscribe(data => {_this.trentv = data; });
    this.server.get_toprated_tv().subscribe(data => {_this.toptv = data; });

    this.server.get_().subscribe(data => {_this.picdata = data; });
    // @ts-ignore
    this.list = this.server.show();
    for (let i = 0; i < this.list.length; i++){
      this.theId = this.list.key(i);
      const symbol = this.theId.slice(0, 1);
      // tslint:disable-next-line:triple-equals
      if ( symbol == 'c'){
        this.tId = this.theId.slice(2);
        this.tem = this.server.get(this.theId);
        this.result = JSON.parse(this.tem);
        this.result.id = this.tId;
        if (this.theId.slice(1, 2) === 'm')
        {this.result.type = 'movie'; }
        else{this.result.type = 'tv'; }
        this.results.push(this.result);
      }
    }
    // tslint:disable-next-line:only-arrow-functions typedef
    this.results.sort(function(a , b) {
      if (a.addTime > b.addTime ){
        return -1;
      }
      else{ return 1; }
    });
    console.log(this.results, 'here');
    let counter = 0;
    let six = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.results.length; i++){
      if ( counter === 6 ){
        counter = 0;
        this.continueNormal.push(six);
        six = [];
      }
      six.push(this.results[i]);
      counter += 1;
    }
    if (counter !== 6){
      this.continueNormal.push(six);
    }
    this.countinue = this.results;
    console.log(this.continueNormal);
    this.screenwidth = window.innerWidth;

  }
  // tslint:disable-next-line:typedef
   addCountinue(tId, poster , titleName, type){
    const time = new Date();
    let tag;
    if ( type === 'movie'){
      tag = 'cm';
    }
    else{tag = 'ct'; }
    this.server.set(tag + tId, JSON.stringify({title: titleName, poster_path: poster, addTime: time }));
    // @ts-ignore// .mw399566).titleJSON.parse(
  }
  ngOnInit(): void {
        fromEvent(window, 'resize').subscribe((event) => { this.screenwidth = window.innerWidth; });
    // tslint:disable-next-line:variable-name
  }
  // tslint:disable-next-line:typedef
  goDetailPage(mediaType, id){
  }

}

