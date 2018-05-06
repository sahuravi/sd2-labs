import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class AmountUpdateService {

    constructor(private http: HttpClient) { }

    price: number;
    bonusPrice: number;
}