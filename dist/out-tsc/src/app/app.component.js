import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.title = 'CreateForm';
        this.url = 'https://docs.google.com/forms/d/e/1FAIpQLSdzJ1qYADgvYhXTa1eCbeFGPptKSyxm6aon6p3ILFQHZ2Suvg/viewform';
        this.fieldMapping = {
            name: 'entry.774485073',
            gender: 'entry.2044485490',
            email: 'entry.1749011696',
            roomTypeOptions: 'entry.1444788616',
            numberGuests: 'entry.1934381288',
            date: 'entry.2140375122',
            freePickup: 'entry.181767127',
            flightNumber: 'entry.1597213970',
            specialRequest: 'entry.1819819084'
        };
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map