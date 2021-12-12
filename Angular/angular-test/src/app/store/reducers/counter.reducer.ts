import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';


export const counterFeatureKey = 'counter';

export interface State {
  count: number

}

export const initialState: State = {
  count: 0
};

export const reducer = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrement, state => ({
    ...state,
    count: state.count - 1
  }))
);
