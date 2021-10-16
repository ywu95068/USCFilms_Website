import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css'],
  providers: [ServiceService]
})
export class MylistComponent implements OnInit {
  public list;
  public theId;
  public tId;
  public mediaType;
  public results = [];
  public tem;
  public result;
  public temResults = [];
  // @ts-ignore
  constructor(public server: ServiceService) {
    this.screenwidth = window.innerWidth;
    // @ts-ignore
    this.list = this.server.show();
    for (let i = 0; i < this.list.length; i++){
      this.theId = this.list.key(i);
      const symbol = this.theId.slice(0, 1);
      // tslint:disable-next-line:triple-equals
      if ( symbol == 'w'){
        this.tId = this.theId.slice(2);
        this.tem = this.server.get(this.theId);
        this.result = JSON.parse(this.tem);
        this.result.id = this.tId;
        this.result.type = this.theId.slice(1, 2);
        this.results.push(this.result);
      }
    }
    // tslint:disable-next-line:typedef only-arrow-functions
    // @ts-ignore
    // tslint:disable-next-line:no-unused-expression only-arrow-functions typedef
    console.log(this.results.sort(function(a , b) {
      if (a.addTime > b.addTime ){
        return -1;
      }
      else{ return 1; }
    }));
    let counter = 0;
    let exchange = [];
    for ( let resu of this.results){
      if (exchange.length === 6){
        this.temResults.push(exchange);
        exchange = [];
        counter = 0;
      }
      exchange.push(resu);
      counter++;
    }
    this.temResults.push(exchange);
  }

  public phone = false;
  public screenwidth;


  ngOnInit(): void {
    // @ts-ignore
    fromEvent(window, 'resize').subscribe((event) => { this.screenwidth = window.innerWidth; });
  }


}
