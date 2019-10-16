import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'mw-app',
  templateUrl: '../partials/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  imgHome =  require('../media/04.png');
  imgMovie = require('../media/03.png');
  imgSeries = require('../media/02.png');

  
  onMediaItemDelete(mediaItem){

  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedon: null,
    isFavorite: false
  };
}
