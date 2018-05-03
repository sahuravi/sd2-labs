import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Home Page';
    employees: any;
    searchText: string = "";

    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    getOrdersInfo() {

        this.http.get(`/api/orders-data`)
            .map((res: Response) => res)
            .catch((error: any) => Observable.throw(error.message || 'Server error'));

    }


}
