import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cinema } from '../models/Cinema';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  cinemaUrl: string = 'assets/data/cinemas.json';

  constructor(private http: HttpClient) {}

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.cinemaUrl);
  }
  // Should be a getCinema() method here. But this is not possible as the data is coming from a JSON file locally.
  // Alternatively I'm using the getCinemas() method and filtering by matching the id to the route id.
}
