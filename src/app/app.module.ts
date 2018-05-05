import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingComponent, AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';

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
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
