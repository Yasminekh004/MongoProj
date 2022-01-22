import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  id: String;
  movie: Movies;

  constructor(private route: ActivatedRoute,private router: Router,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.movie = new Movies();
    this.id = this.route.snapshot.params['id'];

    this.moviesService.getMovies(this.id).subscribe(data => {
      console.log(data)
      this.movie = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['movies']);
  }

}
