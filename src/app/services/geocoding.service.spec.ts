import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GeocodingService } from './geocoding.service';

describe('GeocodingService', () => {
  let service: GeocodingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(GeocodingService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should make an HTTP GET request with correct params', () => {
    const mockResponse = {
      name: 'test',
      country: 'test',
      lat: 123,
      lon: 456,
    };
    const testCity = 'city';
    const testCountryCode = 'cc';

    service.getLocation(testCity, testCountryCode).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(request => {
      return (
        request.url === service['apiUrl'] &&
        request.method === 'GET' &&
        request.params.get('q') === testCity + ',' + testCountryCode &&
        request.params.get('appid') === service['apiKey']
      );
    });

    req.flush(mockResponse);

    httpTestingController.verify();
  });
});
