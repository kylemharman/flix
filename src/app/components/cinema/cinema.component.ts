import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';
import { Cinema } from '../../models/Cinema';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
})
export class CinemaComponent implements OnInit {
  cinema: Cinema;

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService
  ) {}

  ngOnInit(): void {
    this.getCinema();
  }

  // Normally this would be a seperate get request to fetch a single cinema from the database by ID. This would be provided from the cinema.service, However as i'm fetching data from a local JSON file this is not possible.
  getCinema() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.cinemaService.getCinemas().subscribe((cinemas) => {
      this.cinema = cinemas.find((cinema) => cinema.id === id);
      console.log(this.cinema);
    });
  }
}
