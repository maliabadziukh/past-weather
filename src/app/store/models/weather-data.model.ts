export interface WeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  data: [WeatherDataProps];
}

export interface WeatherDataProps {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  rain?: {
    '1h': number;
  };
  snow?: {
    '1h': number;
  };
}
