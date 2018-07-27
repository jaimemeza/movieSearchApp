import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeAnimation, routerTransition } from './animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation, routerTransition]
})
export class AppComponent {
  movie: any;
  totals = [];
  movieInfo: any;
  animate = true;

  constructor(public http: HttpClient) {
    this.http = http;
  }

  searchIt(p) { 
    let type = (<HTMLInputElement>document.getElementById('type')).value;
    let box = (<HTMLInputElement>document.getElementById("searchBox")).value;
    box != undefined ? box = box + '&page=' + p + '&type=' + type : null;
    let get = "https://www.omdbapi.com/?apikey=5140c43a&s=" + box;
    this.http.get(get).subscribe((data) => {
      this.movie = data;
      this.totals = [];
      for (let i = 0; i <= 9 && i < this.movie.totalResults / 10; i++) {
        this.totals.push("");
      }
    });
    setInterval(function(){ this.animate = !this.animate; }, 1000);
  }


  getMoreInfo(imdbID) {
    imdbID != undefined ? imdbID = '&i=' + imdbID : null;
    let get = "https://www.omdbapi.com/?apikey=5140c43a&" + imdbID;
    this.http.get(get).subscribe((data) => {
      this.movieInfo = data;
      setInterval(function(){ this.animate = !this.animate; }, 1000);
    });
  }
}
