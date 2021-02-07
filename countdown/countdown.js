import { interval } from 'rxjs';
import { scan, take } from 'rxjs/operators';

interval(1000)
  .pipe(
    take(10),
    scan((acc, curr) => (document.getElementById('countdown').textContent = acc - 1), 10)
  )
  .subscribe({
    complete() {
      document.getElementById('confirmation').textContent = 'Lift-off!';
    },
  });
