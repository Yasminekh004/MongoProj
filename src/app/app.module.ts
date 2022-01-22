import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutoComponent } from './auto/auto.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMoviesComponent,
    MoviesListComponent,
    MoviesDetailsComponent,
    UpdateMoviesComponent,
    AutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
