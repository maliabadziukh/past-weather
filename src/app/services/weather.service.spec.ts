import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should make an HTTP GET request with correct params', () => {
    const mockResponse = {
      data: 'test',
    };

    const testLon = 123;
    const testLat = 456;
    const testUnix = 789;

    service.getWeather(testLon, testLat, testUnix).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(request => {
      return (
        request.url === service['apiUrl'] &&
        request.method === 'GET' &&
        request.params.get('lat') === testLat.toString() &&
        request.params.get('lon') === testLon.toString() &&
        request.params.get('dt') === testUnix.toString() &&
        request.params.get('appid') === service['apiKey']
      );
    });

    req.flush(mockResponse);

    httpTestingController.verify();
  });
});
