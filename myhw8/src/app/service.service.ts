import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public basurl = 'https://test1-310121.wl.r.appspot.com/'; // http://localhost:8080/
  public headers = new HttpHeaders();
  public PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});
  // tslint:disable-next-line:typedef
  set(key: any, value: any){
    localStorage.setItem(key, value);
  }
  // tslint:disable-next-line:typedef
  set_wishlist(value: any){
    // localStorage.wishlist.push(value);
  }
  // tslint:disable-next-line:typedef
  get(key: any){
    return localStorage.getItem(key);
  }
  // tslint:disable-next-line:typedef
  remove(key: any){
    localStorage.removeItem(key);
  }
  // tslint:disable-next-line:typedef
  show(){
    return localStorage;
  }
  constructor(private http: HttpClient) {
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.remove('ct119466');
  }
  // tslint:disable-next-line:typedef
  public get_picsdata(): Observable<any>{
    return this.http.get(this.basurl + 'picinfo', {headers: this.headers});
  }
  public get_popular_movie(): Observable<any>{
    return this.http.get(this.basurl + 'popular_movie', {headers: this.headers});
  }
  public get_trending_movie(): Observable<any>{
    return this.http.get(this.basurl + 'Trending_movie', {headers: this.headers});
  }
  public get_toprated_movie(): Observable<any>{
    return this.http.get(this.basurl + 'Toprated_movie', {headers: this.headers});
  }
  public get_popular_tv(): Observable<any>{
    return this.http.get(this.basurl + 'popular_tv', {headers: this.headers});
  }
  public get_trending_tv(): Observable<any>{
    return this.http.get(this.basurl + 'Trending_tv', {headers: this.headers});
  }
  public get_toprated_tv(): Observable<any>{
    return this.http.get(this.basurl + 'Toprated_tv', {headers: this.headers});
  }
   public get_recommend_movie(id): Observable<any>{
    return this.http.get(this.basurl + 'recommend_movie/' + id, {headers: this.headers});
  }
   public get_similar_movie(id): Observable<any>{
    return this.http.get(this.basurl + 'similar_movie/' + id, {headers: this.headers});
  }
     public get_recommend_tv(id): Observable<any>{
    return this.http.get(this.basurl + 'recommend_tv/' + id, {headers: this.headers});
  }
   public get_similar_tv(id): Observable<any>{
    return this.http.get(this.basurl + 'similar_tv/' + id, {headers: this.headers});
  }

  // tslint:disable-next-line:variable-name
  public get_detail(media_type, id): Observable<any>{
    return this.http.get(this.basurl + media_type + '/' + id, {headers: this.headers});
  }
  // tslint:disable-next-line:variable-name
  public get_video(media_type, id): Observable<any>{
    return this.http.get(this.basurl + media_type + '/video/' + id, {headers: this.headers});
  }
  // tslint:disable-next-line:variable-name
  public get_castlist(media_type, id): Observable<any>{
    return this.http.get(this.basurl + 'castlist/' + media_type + '/' + id, {headers: this.headers});
  }
  public get_castinfo(id): Observable<any>{
    return this.http.get(this.basurl + 'cast/' + id , {headers: this.headers});
  }
   public get_socialmedia(id): Observable<any>{
    return this.http.get(this.basurl + 'cast/social/' + id, {headers: this.headers});
  }
  // tslint:disable-next-line:variable-name
    public get_reviews(media_type, id): Observable<any>{
    return this.http.get(this.basurl + media_type + '/reviews/' + id, {headers: this.headers});
  }
  public get_search(keyword): Observable<any>{
    // tslint:disable-next-line:max-line-length
    return this.http.get<any[]>(this.basurl + 'search/' + keyword, {headers: this.headers, params: this.PARAMS.set('search', keyword)});
  }
  public get_(): Observable<any>{
    return this.http.get(this.basurl + '', {headers: this.headers});
  }
}
