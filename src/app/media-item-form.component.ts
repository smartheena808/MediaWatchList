import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: '../partials/media-item-form.component.html',
    styleUrls: ['../css/media-item-form.component.css']
})

export class MediaItemFormComponent {
    form;

    ngOnInit() {
        this.form = new FormGroup({
            medium: new FormControl('Movies'),
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')])),
            category: new FormControl(''),
            year: new FormControl('', this.yearValidation),
        });
    }

    // Custom Validators
    yearValidation(control){
        if (control.value.trim().length === 0){
            return null;
        }
        let year = parseInt(control.value);
        let minYear = 1900;
        let maxYear = 2100;

        if (year >= minYear && year <= maxYear){
            return null;
        }else {
            return {'year': {
                'min': minYear,
                'max': maxYear
            }};
        }
    }
        
    onSubmit(mediaItem){
        console.log(mediaItem);
      
    }
}