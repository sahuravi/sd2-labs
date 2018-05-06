import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingComponent, AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';
import { AmountUpdateService } from './services/amount-update.service';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppRoutingComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [DataService, AmountUpdateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
