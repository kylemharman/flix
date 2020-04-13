import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CinemaService } from '../../services/cinema.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie;
  cinemaHasMovie: any[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private cinemaService: CinemaService
  ) {}

  ngOnInit(): void {
    this.getMovie();
    this.getCinemasForMovie();
  }

  // Normally this would be a seperate get request to fetch a single movie from the database by ID. This would be provided from the movie.service, However as i'm fetching data from a local JSON file this is not possible.
  getMovie() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovies().subscribe((movies) => {
      this.movie = movies.find((movie) => movie.id === id);
      // console.log(this.movie);
    });
  }

  getCinemasForMovie() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.cinemaService.getCinemas().subscribe((cinemas) => {
      this.cinemaHasMovie = cinemas
        .map((cinema) => ({
          id: cinema.id,
          name: cinema.name,
          location: cinema.location,
          showTimes: cinema.hasMovies.find((movie) => movie.id === id),
        }))
        .filter((movie) => movie.showTimes);
      // console.log(this.cinemaHasMovie);
    });
  }
}
