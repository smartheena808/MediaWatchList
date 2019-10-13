import { Component, Input } from '@angular/core'

@Component({
    selector: 'mw-media-item',
    templateUrl: '../partials/media-item.component.html',
    styleUrls: ['../css/media-item.component.css']
})

export class MediaItemComponent {
    @Input() mediaItem;

    onDelete() {
        console.log('Deleted!');
    }

}