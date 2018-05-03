import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Home Page';
    data: any;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {

    }

    getOrdersInfo() {
        this.dataService.getOrder()
            .subscribe((data) => {
                this.data = data;
            })
            .catch((err) => {
                console.log(err.message);
            })


    }


}
