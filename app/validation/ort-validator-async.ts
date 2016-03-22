import { Control } from 'angular2/common';

export class OrtValidatorAsync {
    
    static validate(c: Control): Promise<any> {
        
        return new Promise((resolve) => {
            
            setTimeout(() => { 
                
                if (c.value == 'Graz'
                    || c.value == 'Hamburg'
                    || c.value == 'Frankfurt'
                    || c.value == 'Zürich') {
                        
                    resolve({});       
                }
                
                resolve({
                    'ortAsync': true
                });
                
            }, 3000);
        
        }) 
        
        
    }
    
}