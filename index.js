/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

import { fromEvent } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.error('error', err),
  complete: () => console.log('complete'),
};

const source$ = fromEvent(document, 'keyup');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log('unsubscribing');
  subOne.unsubscribe();
}, 3000);
