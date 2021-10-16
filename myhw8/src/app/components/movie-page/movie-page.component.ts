import {Component, NgModule, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {fromEvent, Observable} from 'rxjs';
import {Router, RouterModule} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {RouterEntryPoint} from '@angular/compiler-cli/src/ngtsc/routing/src/route';
import {$} from 'protractor';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
  providers: [ServiceService, NgbPopoverConfig]
})
export class MoviePageComponent implements OnInit {
// tslint:disable-next-line:variable-name
public similar_m: any;
// tslint:disable-next-line:variable-name
public similar_movie = 'similar_movie';
// tslint:disable-next-line:variable-name
public recommend_m: any;
// tslint:disable-next-line:variable-name
public recommend_movie = 'recommend_movie';
// tslint:disable-next-line:variable-name
public detail_info: any;
// tslint:disable-next-line:variable-name
public video_info: any;
public castlist: any;
public reviews: any;
public castId: any;
public castInfo: any;
public castNew = true;
public router: Router;
public videoH = 397;
public videoL = 708;
public videoHforphone = 198;
public videoLforphone = 352;
public screenwidth;
public inWatchlist;
public added = false;
public removed = false;
public twitterText = 'Watch ';
public twitterUrl;
public castpicurl = 'https://image.tmdb.org/t/p/w500/';
public socialmedia;

  constructor(public server: ServiceService, public activeRouter: ActivatedRoute, config: NgbPopoverConfig) {
    // tslint:disable-next-line:variable-name
    config.placement = 'top';
    config.triggers = 'hover';
    // tslint:disable-next-line:variable-name
    const _this = this;
    this.activeRouter.params.subscribe(param => {
    this.server.get_detail('movie', param.id).subscribe(data => {
        _this.detail_info = data;
        _this.twitterText += data.title + '  \n'; });
    this.server.get_video('movie', param.id).subscribe(data => {
        _this.video_info = data;
        _this.twitterUrl = 'www.youtube.com/watch?v=' + data.videoId;
        console.log(_this.twitterUrl, 'this    '); });
    this.server.get_castlist('movie', param.id).subscribe(data => { _this.castlist = data.cast; });
    this.server.get_reviews('movie', param.id).subscribe(data => { _this.reviews = data.reviews; });
    this.server.get_recommend_movie(param.id).subscribe(data => {_this.recommend_m = data; console.log(_this.recommend_m); });
    this.server.get_similar_movie(param.id).subscribe(data => {_this.similar_m = data; console.log(_this.similar_m, 'simi'); });
    /*for (const i of watchlist){
      // tslint:disable-next-line:triple-equals
      if (watchlist[i].id == param.id){
        console.log(watchlist[i]);
        this.inWatchlist = true;
        break;
      }
    }*/
    if (this.server.get('wm' + param.id)){
      this.inWatchlist = true;
    }
    else{
      this.inWatchlist = false;
    }
    });
    this.screenwidth = window.innerWidth;
  }

  ngOnInit(): void {
    fromEvent(window, 'resize').subscribe((event) => {
      this.screenwidth = window.innerWidth;
      if (this.screenwidth < 768){
        document.getElementById('castContainer').style.width = this.screenwidth.toString() + 'px';
      }});
    if (this.screenwidth < 768){
        document.getElementById('castContainer').style.width = this.screenwidth.toString() + 'px';
      }
    document.getElementById('detailinfoOfcast').style.maxHeight = window.innerHeight.toString() + 'px';
  }
  // tslint:disable-next-line:typedef
  addWatchlist(id: string, titleName: string, posterPath: string ){
    // tslint:disable-next-line:prefer-const
    let time = new Date();
    this.server.set('wm' + id, JSON.stringify({title: titleName, poster_path: posterPath, addTime: time }));
    // @ts-ignore
    console.log(this.server.show()); // .mw399566).titleJSON.parse(
    this.inWatchlist = true;
    this.added = true;
    setTimeout(() => this.added = false, 5000);
  }
  // tslint:disable-next-line:typedef
  removeWatchlist(key: any){
    this.server.remove('wm' + key);
    this.inWatchlist = false;
    this.removed = true;
    setTimeout(() => this.removed = false, 5000);
  }
  // tslint:disable-next-line:typedef
  show_castinfo(id: any){
    this.server.get_castinfo(id).subscribe(data => {
      this.castInfo = data;
      if (this.screenwidth < 768){
      document.getElementById('detailinfoOfcast').style.height = String(window.innerHeight) + 'px';
    }
    });
    this.server.get_socialmedia(id).subscribe(data => {
      this.socialmedia = data;
    });
  }
  // tslint:disable-next-line:typedef
  closeAdd(){
    this.added = false;
  }
  // tslint:disable-next-line:typedef
  closeRemove(){
    this.removed = false;
  }

}
