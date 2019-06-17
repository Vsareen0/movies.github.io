import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MoviesService } from './movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  movie: any;
  IMAGE_URL = 'http://image.tmdb.org/t/p/original/';

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getMovie(id);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getMovie(id: number) {
    this.moviesService.getMovieById(id)
    .subscribe(
      m => this.movie = m
      );
  }

}
