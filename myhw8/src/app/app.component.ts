import {Component, NgModule} from '@angular/core';
import {ServiceService} from './service.service';
import {Observable, of, OperatorFunction, Subject} from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap, catchError  } from 'rxjs/operators';
import {response} from 'express';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:align label-position no-unused-expression
  constructor(public server: ServiceService) {
    // tslint:disable-next-line:no-shadowed-variable

    // @ts-ignore

  }
  title = 'myhw8';
   public homepage = true;
   public searchresult;
   public formController;
  albumService: any;
   public model: any;
   public searchResults;
 searching = false;
  searchFailed = false;
  // tslint:disable-next-line:typedef
  // @ts-ignore
  resultForm = this.searchResults;

  search = (text$: Observable<string>) =>
    text$.pipe(
     debounceTime(1000),
     distinctUntilChanged(),
      switchMap( (searchText) => this.server.get_search(searchText))
    ) // statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
  formatter = (x: {title: string}) => x.title;

  // tslint:disable-next-line:typedef
   click_home(e){
     // tslint:disable-next-line:prefer-const
     document.getElementById('listlink').style.color = 'grey';
     document.getElementById('homelink').style.color = 'white';
     this.homepage = true;
  }
  // tslint:disable-next-line:typedef
  click_list(e){
    // tslint:disable-next-line:prefer-const
     document.getElementById('homelink').style.color = 'grey';
     this.homepage = false;
     document.getElementById('listlink').style.color = 'white';
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
  // tslint:disable-next-line:use-lifecycle-interface typedef

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
  }
}
