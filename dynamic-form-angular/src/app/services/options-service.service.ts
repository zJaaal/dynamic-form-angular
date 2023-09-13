import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OptionsServiceService {
  constructor() {}

  getOptions() {
    return of([
      {
        identiter: '1',
        name: 'demo.dotcms.com',
      },
      {
        identiter: '2',
        name: 'some.other.site.com',
      },
    ]);
  }
}
