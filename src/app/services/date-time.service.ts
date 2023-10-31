import { Injectable } from '@angular/core';

import { DateFactory } from '../factories/date.factory';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  constructor(private dateFactory: DateFactory) {}
  convertToUnixTime(dateString: string) {
    const unixTime = this.dateFactory.create(dateString).getTime() / 1000;
    return unixTime;
  }

  getCurrentDatetime() {
    const currentDatetime = this.dateFactory.create().toISOString().slice(0, 16);
    return currentDatetime;
  }
}
