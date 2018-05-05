import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { DataService } from './services/data.service';

import * as io from 'socket.io-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    title = 'Home Page';
    orderData: any;
    url = 'http://localhost:9000';
    socket: any;
    json: JSON = JSON;

    constructor(private dataService: DataService, private ref: ChangeDetectorRef) {
        this.orderData = [];
        this.socket = io(this.url);

    }

    ngOnInit() {
        let self = this;
        this.dataService.getOrder()
            .subscribe((data) => {
                self.orderData = data;
                self.ref.detectChanges();
            }, ((err) => {
                console.log(err.message);
            }));

        this.socket.on('file-change', function (fileData) {
            // console.log(fileData);
            self.orderData = JSON.parse(fileData);
            self.ref.detectChanges();
            // this.ref.markForCheck();
        });
    }

    getOrdersInfo() {

    }
}
