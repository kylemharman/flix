import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  // Normally this would be a seperate get request to fetch a single movie from the database. This would be provided from the movie.service
  getMovie() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovies().subscribe((movies) => {
      this.movie = movies.find((movie) => movie.id === id);
      console.log(this.movie);
    });
  }
}
