import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})

export class WeatherAppComponent implements OnInit  {
  public data:any;
  
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails() {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=
    dallas&units=imperial&appid=c412fb8f1ed42194a962dd8b85f34c0c`).subscribe(
      (resp:any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  }
}


// const api = `https://api.openweathermap.org/data/2.5/weather?q=
//     ${location}&units=imperial&appid=c412fb8f1ed42194a962dd8b85f34c0c`;