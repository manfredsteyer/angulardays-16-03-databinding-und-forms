import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from 'angular2/core';

// Module-Muster: SystemJS, AMD, CommonJS (NodeJS), UMD

@Component({
    selector: 'flug-card', // <flug-card></flug-card>
    templateUrl: 'app/flug-card/flug-card.html',
    changeDetection: ChangeDetectionStrategy.OnPush // Immutables
})
export class FlugCard {
    
    @Input('item') flug;
    @Input() selectedItem;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItem = this.flug;    
        this.selectedItemChange.emit(this.flug);
    }
    
}