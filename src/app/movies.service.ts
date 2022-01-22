import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseURL = 'http://localhost:8081/api/movies'; 

  constructor(private http: HttpClient) { }

  getMovies(id: String): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createMovies(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, movie);
  }

  updateMovies(id: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteMovies(id: String): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }

  getMoviesList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
