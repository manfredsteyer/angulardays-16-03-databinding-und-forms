
import {Component, provide, Inject} from 'angular2/core';
import {IFlug} from '../flug';
import { FlugService} from '../services/flug-service';
import { OrtPipe} from '../pipes/ort-pipe';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import { FlugCard} from '../flug-card/flug-card';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { OrtValidator} from '../validation/ort-validator';
import { OrtValidatorAsync } from '../validation/ort-validator-async';
declare var fetch: any;

// var MY_DIRECTIVES = [FlugCard];
 
@Component({
    selector: 'flug-suchen', 
    templateUrl: 'app/flug-suchen/flug-suchen.html',
    pipes: [OrtPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class FlugSuchen {

    public von: string = "Graz";
    public nach: string = "Hamburg";
    public selectedFlug: IFlug;
    
    public filter: ControlGroup;

    constructor(
        private flugService: FlugService,
        private fb: FormBuilder) {
            
            this.filter = fb.group({
               'von': [
                   'Graz',
                   Validators.compose([
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(30),
                        OrtValidator.validate
                   ]),
                   Validators.composeAsync([
                        OrtValidatorAsync.validate
                   ]) 
                ],
               'nach': [
                   'Hamburg'
                ]
            });
            
    }

    public suchen(): void {

        this.flugService
            .find(this.filter.value.von, this.filter.value.nach);

    }

    // public fluege: Array<IFlug> = new Array<IFlug>();
    public get fluege() {
        return this.flugService.fluege;
    }

    public selectFlug(flug: IFlug) {
        this.selectedFlug = flug;
    }

}