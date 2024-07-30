import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [HttpClientModule, NgIf],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})

export class WeatherAppComponent {
  data:any;
  location: string = '';
  
  constructor(private http: HttpClient) {}

   currDate = new Date().toLocaleDateString();
   currTime = new Date().toLocaleTimeString(
    'en-US', {hour: '2-digit', minute: '2-digit'});

  onLocationChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.location = inputElement.value;
    console.log(this.location); // To see the updated value
  }


  public fetchDetails(event?: KeyboardEvent): void {
    if (!event ||event.key === 'Enter') {
      console.log(`Fetching weather data for location: ${location}`);
      if (!location) {
        console.error('Location is empty');
        return;
      }
      this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=
        ${this.location}&units=imperial&appid=c412fb8f1ed42194a962dd8b85f34c0c`).subscribe(
          (resp:any) => {
            console.log(resp);
            this.data = resp;
          },
          error => {
            console.error('API call failed', error);
          }
        );
          this.location = '';
    }

  }
}