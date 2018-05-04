import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

import * as io from 'socket.io-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Home Page';
    orderData: any;
    url = 'http://localhost:9000';
    socket: any;

    constructor(private dataService: DataService) {
        this.orderData = [];
        this.socket = io(this.url);
    }

    ngOnInit() {
        

        this.socket.on('file-change', function (fileData) {
            debugger;
            console.log(fileData);
            this.orderData = fileData;
        });
    }

    getOrdersInfo() {
        this.dataService.getOrder()
            .subscribe((data) => {
                this.orderData = data;
            }, ((err) => {
                console.log(err.message);
            }))
    }
}
