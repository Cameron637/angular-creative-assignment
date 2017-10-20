import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../shared/hero';

let heroes = [
  { id: 0, name: 'Zero' },
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  create(name: string): Promise<Hero> {
    // return this.http
    //   .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
    //   .toPromise()
    //   .then(res => res.json().data as Hero)
    //   .catch(this.handleError);
    const hero = { name } as Hero;
    heroes.push(hero);
    return Promise.resolve(hero);
  }

  delete(id: number): Promise<void> {
    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.delete(url, { headers: this.headers })
    //   .toPromise()
    //   .then(() => null)
    //   .catch(this.handleError);
    heroes = heroes.filter(hero => hero.id !== id);
    return Promise.resolve();
  }

  getHero(id: number): Promise<Hero> {
    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json() as Hero)
    //   .catch(this.handleError);
    return Promise.resolve(heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    // return this.http.get(this.heroesUrl)
    //   .toPromise()
    //   .then(response => response.json() as Hero[])
    //   .catch(this.handleError);
    return Promise.resolve(heroes);
  }

  getHeroesFast(): Hero[] {
    return heroes;
  }

  update(hero: Hero): Promise<Hero> {
    // const url = `${this.heroesUrl}/${hero.id}`;
    // return this.http
    //   .put(url, JSON.stringify(hero), { headers: this.headers })
    //   .toPromise()
    //   .then(() => hero)
    //   .catch(this.handleError);
    return Promise.resolve(hero);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
