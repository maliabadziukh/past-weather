import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateConversionService {
  convertToUnixTime(dateString: string) {
    const unixTime = new Date(dateString).getTime() / 1000;
    return unixTime;
  }
}
