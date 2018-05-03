import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    getOrder(): any {
        return this.http.get(`/api/orders-data`)
            .map((res: Response) => res)
            .catch((error: any) => Observable.throw(error.message || 'Server error'));
    }
}