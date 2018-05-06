import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AmountUpdateService } from '../../services/amount-update.service';

@Component({
    selector: 'app-select-amount',
    templateUrl: './select-amount.component.html',
    styleUrls: ['./select-amount.component.scss']
})

export class SelectAmountComponent implements OnInit {

    selectAmountArr = [
        {
            bonus: 1500,
            price: 5000
        },
        {
            bonus: 700,
            price: 2500
        },
        {
            bonus: 250,
            price: 1000
        },
        {
            bonus: 100,
            price: 500
        }
    ];
    hideFlag = false;
    customPrice: number = 0;

    constructor(private amountUpdateService: AmountUpdateService, private router: Router) {

    }

    proceed() {
        this.router.navigateByUrl('/select-method/credit-card');
    }

    ngOnInit() { }

    radioSelected(flag, price?, bonus?) {
        if (!flag) {
            this.amountUpdateService.price = price;
            this.amountUpdateService.bonusPrice = bonus;
        }
        this.hideFlag = flag ? false : true;
    }

    updateCustomPrice() {
        this.amountUpdateService.price = this.customPrice;
        this.amountUpdateService.bonusPrice = 0;
    }
}
