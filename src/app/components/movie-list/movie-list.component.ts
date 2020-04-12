import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie;

  constructor() {}

  ngOnInit(): void {}
}
