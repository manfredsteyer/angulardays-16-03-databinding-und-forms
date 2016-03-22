import {Component } from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {FlugService } from '../services/flug-service';
import { OrtValidatorDirective} from '../validation/ort-validator-directive';
import { OrtValidatorAsyncDirective} from '../validation/ort-validator-async-directive';

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html',
    directives: [OrtValidatorDirective, OrtValidatorAsyncDirective]
})
export class FlugEdit {

    private id: number;
    public message: string = "";
    public flug: any = { };
    
    constructor(
        private flugService: FlugService,
        params: RouteParams) {
        
        this.id = parseInt(params.get('id'));
        
        flugService.getById(this.id).subscribe(
            (flug) => {
               this.flug = flug; 
            },
            (err) => {
                this.message = err;
                console.error(err);
            }
            
        );
    }

    info = "Flug-Edit";

}