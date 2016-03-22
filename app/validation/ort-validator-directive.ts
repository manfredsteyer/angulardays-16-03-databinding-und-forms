
import { Directive, Provider } from 'angular2/core';
import {OrtValidator  } from './ort-validator';
import { NG_VALIDATORS } from 'angular2/common';

@Directive({
    selector: 'input[ort]',
    providers: [new Provider(NG_VALIDATORS, {useValue: OrtValidator.validate, multi: true})]    
})
export class OrtValidatorDirective {
}