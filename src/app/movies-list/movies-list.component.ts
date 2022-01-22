import { Component, OnInit } from '@angular/core';
import { MoviesDetailsComponent } from './../movies-details/movies-details.component';
import { MoviesService } from './../movies.service';
import { Movies } from './../movies';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Observable<Movies[]>

  constructor(private moviesService : MoviesService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.movies = this.moviesService.getMoviesList();
  }

  deleteMovies(id: String) {
    this.moviesService.deleteMovies(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  MoviesDetails(id: String){
    this.router.navigate(['details', id]);
  }

  updateMovies(id: String){
    this.router.navigate(['update', id]);
  }

}
