import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
    selector: 'app-select-amount-radio',
    templateUrl: './select-amount-radio.component.html',
    styleUrls: ['./select-amount-radio.component.scss']
})
export class SelectAmountRadioComponent implements OnInit {
    @Input('bonusPrice') bonusPrice: number;
    @Input('price') price: number;
    @Input('customPrice') customPrice: number;
    
    ngOnInit() {
    }
}
