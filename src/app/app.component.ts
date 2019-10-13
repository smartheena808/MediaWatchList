import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: '../partials/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedon: 129416656384,
    isFavorite: false
  };
}
