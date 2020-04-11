import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CinemasComponent } from './pages/cinemas/cinemas.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinema/:id', component: CinemaComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
