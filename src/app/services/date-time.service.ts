import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  convertToUnixTime(dateString: string) {
    const unixTime = new Date(dateString).getTime() / 1000;
    return unixTime;
  }

  getCurrentDatetime() {
    const currentDatetime = new Date().toISOString().slice(0, 16);
    return currentDatetime;
  }
}
