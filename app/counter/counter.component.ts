import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/AppState';
import { selectCount } from '../state/counter/counter.selector';
import { decrement, increment, reset } from '../state/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$:Observable<number> | undefined;
  constructor(private store:Store<AppState>){
    this.count$=this.store.select(selectCount)

  }
  increment(){
    this.store.dispatch(increment())

  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())

  }
}
