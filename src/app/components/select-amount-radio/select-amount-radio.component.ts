import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

import { AmountUpdateService } from '../../services/amount-update.service';

@Component({
    selector: 'app-select-amount-radio',
    templateUrl: './select-amount-radio.component.html',
    styleUrls: ['./select-amount-radio.component.scss']
})
export class SelectAmountRadioComponent implements OnInit {
    @Input('bonusPrice') bonusPrice: number;
    @Input('price') price: number;
    @Input('customPrice') customPrice: number;

    constructor(private amountUpdateService: AmountUpdateService) {

    }

    ngOnInit() {
    }

    updateAmount() {
        this.amountUpdateService.price = this.price;
        this.amountUpdateService.bonusPrice = this.bonusPrice;
    }
    updateCustomAmount(event) {
        this.amountUpdateService.price = event.target.value;
        this.amountUpdateService.bonusPrice = 0;

        
    }
}
