
import { Directive, Provider } from 'angular2/core';
import {OrtValidatorAsync  } from './ort-validator-async';
import { NG_ASYNC_VALIDATORS } from 'angular2/common';

@Directive({
    selector: 'input[ortAsync]',
    providers: [new Provider(NG_ASYNC_VALIDATORS, {useValue: OrtValidatorAsync.validate, multi: true})]    
})
export class OrtValidatorAsyncDirective {
}