import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movies } from './movies';


@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

 export class MoviesComponent {
    listType = true;
    showImage = false;
    orientation = false;
    movieDetails = true;
    filteredMovies: Movies;
    IMAGES_URL = 'http://image.tmdb.org/t/p/w92/';
    IMAGES_URL_2 = 'http://image.tmdb.org/t/p/w185';
    categoryFilter = ['Popular', 'Upcoming', 'Top Rated', 'Now Playing'];

  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies()
    .subscribe(
      (data) =>  this.filteredMovies = data
    );

  }

  changeMovieFilter(value) {
    console.log('Instantiated');
    console.log(value);
    this.moviesService.getMoviesByFilter(value)
    .subscribe(
      (data) => this.filteredMovies = data
    );
    console.log('Retrieved');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  toggleMovieDetails(): void {
    this.movieDetails = !this.movieDetails;
  }

  toggleOrientation(event): void {
    console.log(event);
    this.orientation = event;
  }
 }
