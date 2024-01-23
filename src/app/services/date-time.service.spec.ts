import { TestBed } from '@angular/core/testing';

import { DateTimeService } from './date-time.service';

describe('DateTimeService', () => {
  let service: DateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeService);
  });

  it('should convert a date string to unix time correctly', () => {
    const testString = '2023-11-02T14:27';
    const expectedUnix = 1698931620;

    const resultUnix = service.convertToUnixTime(testString);

    expect(resultUnix).toBe(expectedUnix);
  });
});
