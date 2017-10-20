import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../shared/hero';
import { HeroService } from './hero.service';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http, private heroService: HeroService) { }

  search(term: string): Observable<Hero[]> {
    // return this.http
    //   .get(`api/heroes/?name=${term}`)
    //   .map(response => response.json() as Hero[]);
    return Observable.of(this.heroService.getHeroesFast());
  }
}
