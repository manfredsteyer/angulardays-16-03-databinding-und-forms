import {Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'ort',
    pure: true
})
export class OrtPipe implements PipeTransform {

    // {{ f.von | ort:'short' }}
    public transform(value: any, args: any[]): any {

        var short, long;
        var fmt = args[0]; // 'short', 'long'

        switch (value) {
            case 'Hamburg':
                short = 'HAM';
                long = 'Hamburg Airport';
                break;
            case 'Graz':
                short = 'GRZ';
                long = 'Graz Thalerhof';
                break;
            default:
                return "ROM";

        }

        if (fmt == 'short') return short;
        return long;

    }

}