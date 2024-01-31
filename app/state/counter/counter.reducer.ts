import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { state } from '@angular/animations';

export interface CounterState {
    counte: number
  }
  
export const intialCounterState:CounterState = {
    counte: 0
  }

  export const cartReducer = createReducer(
    intialCounterState,
    on(increment,state =>({...state,counte:state.counte +1})),
    on(decrement,state =>({...state,counte:state.counte -1})),  
    on(reset, state => ({ ...state, counte: 0 }))
  )
