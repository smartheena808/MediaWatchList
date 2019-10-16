import { Component, Input} from '@angular/core';
import { MediaItemService } from './media-item.service';

declare var require: any;

@Component({
    selector: 'mw-media-item-list',
    templateUrl: '../partials/media-item-list.component.html',
    styleUrls: ['../css/media-item-list.component.css']
})

export class MediaItemListComponent {
    medium = '';
    mediaItems = [];
    
    imgHome =  require('../media/04.png');
    imgMovie = require('../media/03.png');
    imgSeries = require('../media/02.png');

    constructor(private mediaItemService: MediaItemService){}

    ngOnInit(){
      this.getMediaItems(this.medium);
    }

    onMediaItemDelete(mediaItem){
      this.mediaItemService.delete(mediaItem).subscribe(() =>{
        this.getMediaItems(this.medium);
      });
    }

    getMediaItems(medium){
      this.medium = medium;
      this.mediaItemService.get(medium).subscribe(mediaItems => {
        this.mediaItems = mediaItems
      });
     
    }
}