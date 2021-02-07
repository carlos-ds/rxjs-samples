import { fromEvent, from } from 'rxjs';
import { map } from 'rxjs/operators';

const winheight = window.innerHeight;
const docheight = getDocHeight();
const trackLength = docheight - winheight;

const scrollPercentage$ = fromEvent(document, 'scroll').pipe(map((e) => (window.pageYOffset / trackLength) * 100));

const statusBar = document.getElementById('status');

const updateStatusBar$ = from(scrollPercentage$).subscribe((value) => {
  statusBar.style.width = `${value}%`;
  console.log(value);
});

function getDocHeight() {
  const D = document;
  return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
}
