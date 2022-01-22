import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { AutoComponent } from './auto/auto.component';

const routes: Routes = [
  { path: '', redirectTo: 'auto', pathMatch: 'full' },
  { path: 'auto', component: AutoComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'add', component: CreateMoviesComponent },
  { path: 'update/:id', component: UpdateMoviesComponent },
  { path: 'details/:id', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
