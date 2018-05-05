import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

@NgModule({
    declarations: [
        AppComponent,
        FetchDataComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
