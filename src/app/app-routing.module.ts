import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAmountComponent } from './components/select-amount/select-amount.component';
import { AppComponent } from './app.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectAmountRadioComponent } from './components/select-amount-radio/select-amount-radio.component';
import { SelectMethodComponent } from './components/select-method/select-method.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { NetBankingComponent } from './components/net-banking/net-banking.component'

const routes: Routes = [
    {
        path: 'select-amount', component: SelectAmountComponent
    },
    {
        path: 'select-method', component: SelectMethodComponent,
        children: [
            { path: 'credit-card', component: CreditCardComponent },
            { path: 'net-banking', component: NetBankingComponent }
        ]
    },
    {
        path: 'select-method/credit-card', component: CreditCardComponent
    },
    {
        path: '', component: FetchDataComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutingComponent = [
    SelectAmountComponent,
    FetchDataComponent,
    PageNotFoundComponent,
    SelectAmountRadioComponent,
    SelectMethodComponent,
    CreditCardComponent,
    NetBankingComponent
];