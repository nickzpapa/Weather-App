import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { BehaviorSubject } from 'rxjs';
import { WeatherResponse } from './models/weather-response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  selectedCity?: string;
  cities = ['Rio De Janeiro', 'Beijing', 'Los Angeles'];
  cityWeather: WeatherResponse = null;

  constructor(private readonly _weatherService: WeatherService){}

  ngOnInit(): void {
    this.onClickCity(this.cities[0]);
  }  

  onClickCity(city: string) {
    this.selectedCity = city;
    this._weatherService.getWeather(city).subscribe(
      response => {
        console.log(response);
        this.cityWeather = {...response};
      }
    )    
  }

}
