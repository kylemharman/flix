import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { CinemaComponent } from './components/cinema/cinema.component';
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CinemasComponent } from './pages/cinemas/cinemas.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './components/form-helpers/input/input.component';
import { TimeDisplayComponent } from './components/time-display/time-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CinemaComponent,
    CinemaListComponent,
    MovieListComponent,
    MovieComponent,
    MoviesComponent,
    CinemasComponent,
    HomeComponent,
    InputComponent,
    TimeDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
