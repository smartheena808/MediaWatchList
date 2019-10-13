import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: '../partials/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
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
