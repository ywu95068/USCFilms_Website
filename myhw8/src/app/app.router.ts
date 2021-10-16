import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
// @ts-ignore
import { ArticleComponent } from './article/article.component';
// @ts-ignore
import { ArticledetailComponent } from './articledetail/articledetail.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {MylistComponent} from './components/mylist/mylist.component';
import {MoviePageComponent} from './components/movie-page/movie-page.component';
import {TvPageComponent} from './components/tv-page/tv-page.component';

const routes: Routes = [
{ path: '', component: HomepageComponent},
{ path: 'watch/movie/:id', component: MoviePageComponent},
  { path: 'watch/tv/:id', component: TvPageComponent},
{ path: 'mylist', component: MylistComponent}
];


