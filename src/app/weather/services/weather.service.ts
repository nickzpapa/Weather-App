import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherResponse } from '../models/weather-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly _apiUrl = 'https://api.openweathermap.org/data/2.5/forecast'
  private readonly _apiKey = '482944e26d320a80bd5e4f23b3de7d1f'
  
  constructor(private _httpClient: HttpClient) { }
  
  // example: https://api.openweathermap.org/data/2.5/forecast?q=London&appid=482944e26d320a80bd5e4f23b3de7d1f
  // https://api.openweathermap.org/data/2.5/weather?q=London&appid=482944e26d320a80bd5e4f23b3de7d1f

  getLatitudeLongitudeForCity(city: string) {

  }
  
  getWeather(city: string) {
    const requestUrl = `${this._apiUrl}`;
    const params = new HttpParams()
      .set('q', city) 
      .set('appid', this._apiKey);
    return this._httpClient.get<WeatherResponse>(requestUrl, {params});
  }


}
