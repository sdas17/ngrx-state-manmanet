import { createSelector } from "@ngrx/store";
import { AppState } from "../AppState";
export const selectCounterState =(state:AppState)=>state.counter;
export const selectCount = createSelector(
    selectCounterState,
    (state)=> state.counte
  )