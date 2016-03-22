import { Control } from 'angular2/common';

export class OrtValidator {
    
    static range(min, max) {
        
        return function(c: Control) {
            
        }
        
    }
    
    static validate(c: Control): any {
        if (c.value == 'Graz'
               || c.value == 'Hamburg'
               || c.value == 'Frankfurt'
               || c.value == 'Wien'
               || c.value == 'Zürich') {
                   
            return { };           
        }
        
        return {
            'ort': true
        };
        
    }
    
}