import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

import * as io from 'socket.io-client';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html',
    styleUrls: ['./fetch-data.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FetchDataComponent implements OnInit {
    title = 'Home Page';
    orderData: any;
    url = 'http://localhost:9000';
    socket: any;
    json: JSON = JSON;

    constructor(private dataService: DataService, private ref: ChangeDetectorRef, private router: Router) {
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
            
            self.orderData = JSON.parse(fileData);
            self.ref.detectChanges();
        });
    }

    addCashInstantly() {
        this.router.navigateByUrl('/select-amount');
    }
}
