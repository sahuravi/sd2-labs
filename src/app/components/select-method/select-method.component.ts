import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AmountUpdateService } from '../../services/amount-update.service';

@Component({
    selector: 'app-select-method',
    templateUrl: './select-method.component.html',
    styleUrls: ['./select-method.component.scss']
})

export class SelectMethodComponent implements OnInit {

    creditCardFlag = true;
    debitCardFlag = false;
    netBankingFlag = false;
    walletsFlag = false;
    upiFlag = false;
    price;

    constructor(private router: Router, private amountUpdateService: AmountUpdateService) {
        this.price = this.amountUpdateService.price;
    }
    ngOnInit() { }

    creditCard() {
        this.creditCardFlag = true;
        this.debitCardFlag = false;
        this.netBankingFlag = false;
        this.walletsFlag = false;
        this.upiFlag = false;
        this.router.navigateByUrl('/select-method/credit-card');
    }

    debitCard() {
        this.creditCardFlag = false;
        this.debitCardFlag = true;
        this.netBankingFlag = false;
        this.walletsFlag = false;
        this.upiFlag = false;
        this.router.navigateByUrl('/select-method/credit-card');
    }

    netBanking() {
        this.creditCardFlag = false;
        this.debitCardFlag = false;
        this.netBankingFlag = true;
        this.walletsFlag = false;
        this.upiFlag = false;
        this.router.navigateByUrl('/select-method/net-banking');
    }

    wallets() {
        this.creditCardFlag = false;
        this.debitCardFlag = false;
        this.netBankingFlag = false;
        this.walletsFlag = true;
        this.upiFlag = false;
        this.router.navigateByUrl('/select-method/credit-card');
    }

    upi() {
        this.creditCardFlag = false;
        this.debitCardFlag = false;
        this.netBankingFlag = false;
        this.walletsFlag = false;
        this.upiFlag = true;
        this.router.navigateByUrl('/select-method/credit-card');
    }

}
