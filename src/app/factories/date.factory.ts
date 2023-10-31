import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateFactory {
  create(dateString?: string): Date {
    return dateString ? new Date(dateString) : new Date();
  }
}
