import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.css']
})
export class UpdateMoviesComponent implements OnInit {

  id: String;
  movie: Movies;

  constructor(private route: ActivatedRoute,private router: Router,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie = new Movies();

    this.id = this.route.snapshot.params['id'];

    this.moviesService.getMovies(this.id).subscribe(data => {
      console.log(data)
      this.movie = data;
    }, error => console.log(error));
  }
  updateMovies() {
    this.moviesService.updateMovies(this.id, this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movies();
    this.gotoList();
  }

  onSubmit() {
    this.updateMovies();    
  }

  gotoList() {
    this.router.navigate(['/movies']);
  }

}
