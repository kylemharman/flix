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
}
