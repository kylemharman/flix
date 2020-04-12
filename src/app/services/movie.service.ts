import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesUrl: string = 'assets/data/movies.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  // Should be a getMovie() method here. But this is not possible as the data is coming from a JSON file locally.
  // Alternatively I'm using the getMovies() method and filtering by matching the id to the route id.
}
