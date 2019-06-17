import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private BASE_URL = 'https://api.themoviedb.org/3/movie';
  private DEFAULT_FILTER = '/popular';
  private API_KEY = '?api_key=e73130e52d6a080b1c0dd07fdaffb1bf';
  private applyFilter: string;

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movies> {
    return this.httpClient.get<Movies>(this.BASE_URL + this.DEFAULT_FILTER + this.API_KEY);
  }

  getMoviesByFilter(appliedFilter): Observable<Movies> {
    if (appliedFilter === 'Popular') {
      this.applyFilter = '/popular';
    } else if (appliedFilter === 'Upcoming') {
      this.applyFilter = '/upcoming';
    } else if (appliedFilter === 'Top Rated') {
      this.applyFilter = '/top_rated';
    } else if (appliedFilter === 'Now Playing') {
      this.applyFilter = '/now_playing';
    }
    return this.httpClient.get<Movies>(this.BASE_URL + this.applyFilter + this.API_KEY);
  }

  getMovieById(id): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + '/' + id + this.API_KEY);
  }
}
