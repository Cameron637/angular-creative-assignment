import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from '../shared/movie';

const apiKey = '912cc059a81c6cf0c117d04bda069ac9';

@Injectable()
export class MovieService {
  private MoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  private posterUrl = 'https://api.themoviedb.org/3/movies/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.MoviesUrl)
      .toPromise()
      .then(response => response.json().results as Movie[])
      .catch(this.handleError);
  }

  getMoviePoster(id: number): Promise<String> {
    return this.http.get(`${this.posterUrl}${id}/images?api_key=${apiKey}`)
      .toPromise()
      .then(response => response.json().posters)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
