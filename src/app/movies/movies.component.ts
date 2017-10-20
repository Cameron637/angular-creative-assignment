import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/movie.service';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().then(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
