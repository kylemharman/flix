import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { Cinema } from '../../models/Cinema';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css'],
})
export class CinemasComponent implements OnInit {
  cinemas: Cinema[];

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.cinemaService.getCinemas().subscribe((cinemas) => {
      this.cinemas = cinemas;
    });
  }
}
