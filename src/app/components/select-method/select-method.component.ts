import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import { AmountUpdateService } from '../../services/amount-update.service';

@Component({
    selector: 'app-select-method',
    templateUrl: './select-method.component.html',
    styleUrls: ['./select-method.component.scss']
})

export class SelectMethodComponent implements OnInit {

    constructor(private router: Router) { }
    ngOnInit() { }

    creditCard() {
        this.router.navigateByUrl('/select-method/credit-card');
    }

}
