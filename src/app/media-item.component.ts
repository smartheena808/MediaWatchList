import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'mw-media-item',
    templateUrl: '../partials/media-item.component.html',
    styleUrls: ['../css/media-item.component.css']
})

export class MediaItemComponent {
    @Input() mediaItem;
    @Output() delete = new EventEmitter()

    onDelete() {
        this.delete.emit(this.mediaItem);
    }

}