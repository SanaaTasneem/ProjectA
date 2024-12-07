import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Joke } from './joke.model';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent implements OnInit, OnDestroy {
  joke: Joke = { type: '', setup: '', delivery: '', joke: '' };
  private jokeSub: Subscription = new Subscription();

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.jokeService.fetchJoke();
    this.jokeSub = this.jokeService
      .getJokeUpdateListener()
      .subscribe((joke: Joke) => {
        this.joke = joke;
      });
  }

  fetchNewJoke(): void {
    this.jokeService.fetchJoke();
  }

  ngOnDestroy(): void {
    this.jokeSub.unsubscribe();
  }
}
