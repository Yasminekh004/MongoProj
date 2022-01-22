import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {

  movie: Movies = new Movies();
  submitted = false;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(){
  }

  newMovies():void{
    this.submitted = false;
    this.movie = new Movies();
  }

  save() {
    this.moviesService.createMovies(this.movie).subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movies();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/movies']);
  }

}
