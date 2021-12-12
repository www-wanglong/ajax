import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { async_increment, increment } from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}
  async = createEffect(() => {
    return this.actions$.pipe(
      ofType(async_increment),
      mergeMap(() => timer(2000).pipe(
        map(() => increment())
      ))
    )
  })
}
