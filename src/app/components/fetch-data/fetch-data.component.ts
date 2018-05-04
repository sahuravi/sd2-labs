
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { ChatService } from '../chat.service';

import * as io from "socket.io-client";

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html',
    styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {
    socket;

    constructor() {
        
        this.socket = io();
    }

    ngOnInit() {
        
    }
}
