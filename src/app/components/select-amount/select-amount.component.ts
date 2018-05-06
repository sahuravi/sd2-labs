import { Component, OnInit } from '@angular/core';

import { AmountUpdateService } from '../../services/amount-update.service';

@Component({
    selector: 'app-select-amount',
    templateUrl: './select-amount.component.html',
    styleUrls: ['./select-amount.component.scss']
})

export class SelectAmountComponent implements OnInit {

    constructor(private amountUpdateService: AmountUpdateService) {

    }

    proceed() {
        
    }
    
    ngOnInit() { }
}
