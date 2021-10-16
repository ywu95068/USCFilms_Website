import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MylistComponent} from './components/mylist/mylist.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ServiceService} from './service.service';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { TvPageComponent } from './components/tv-page/tv-page.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { MovieCarouelComponent } from './components/movie-carouel/movie-carouel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export const routes: Routes = [
{ path: '', component: HomepageComponent},
{ path: 'watch/movie/:id', component: MoviePageComponent},
  { path: 'watch/tv/:id', component: TvPageComponent},
{ path: 'mylist', component: MylistComponent}
];
@NgModule({
  declarations: [
    AppComponent,
     MylistComponent,
    HomepageComponent,
    MoviePageComponent,
    TvPageComponent,
    MovieCarouelComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule,
        RouterModule.forRoot(routes),
        YouTubePlayerModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule {
}
