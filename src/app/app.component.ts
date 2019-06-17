import { Component } from '@angular/core';
import { MoviesService } from './movies/movies.service';
import { Movies } from './movies/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MoviesApp';
  private movies: Object;

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getMovies()
    .subscribe(
      data => console.log(JSON.stringify(data))
    );
  }

}
