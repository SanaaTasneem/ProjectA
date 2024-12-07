import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Joke } from './joke.model';

@Injectable({ providedIn: 'root' })
export class JokeService {
  private joke: Joke = { type: '', setup: '', delivery: '', joke: '' };
  private jokeUpdated = new Subject<Joke>();

  constructor(private http: HttpClient) {}

  // Fetch a joke from the JokeAPI
  fetchJoke(): void {
    this.http.get<Joke>('https://v2.jokeapi.dev/joke/Any').subscribe((response: any) => {
      this.joke = response;
      this.jokeUpdated.next(this.joke);
    });
  }

  // Observable to get updated jokes
  getJokeUpdateListener(): Observable<Joke> {
    return this.jokeUpdated.asObservable();
  }
}
