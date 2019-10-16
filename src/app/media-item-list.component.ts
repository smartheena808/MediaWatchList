import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';
import { ActivatedRoute } from '@angular/router';

declare var require: any;

@Component({
    selector: 'mw-media-item-list',
    templateUrl: '../partials/media-item-list.component.html',
    styleUrls: ['../css/media-item-list.component.css']
})

export class MediaItemListComponent {
    medium = '';
    mediaItems = [];
    
    imgAdd =  require('../media/01.png');
    // imgMovie = require('../media/03.png');
    // imgSeries = require('../media/02.png');

    constructor(
      private mediaItemService: MediaItemService,
      private activatedRoute: ActivatedRoute){}

    ngOnInit(){
      this.activatedRoute.params.subscribe(params =>{
        let medium = params['medium'];
        if(medium.toLowerCase() === 'all'){
          medium = '';
        }
        this.getMediaItems(medium);
      });
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