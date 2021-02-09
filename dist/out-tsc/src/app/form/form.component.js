import { __decorate } from "tslib";
import { RoomType } from './form.type';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpHeaders, HttpParams } from '@angular/common/http';
let FormComponent = class FormComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.genders = ['male', 'female', 'other'];
        this.freePickups = ['Yes Please! - Pick me up on arrival', 'No Thanks! - I will make my own way there'];
        this.roomTypeOptions = [RoomType.One, RoomType.Two, RoomType.Three, RoomType.Four];
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
        this.formData = this.formBuilder.group({
            name: ['', Validators.required],
            gender: ['female', Validators.required],
            email: [''],
            roomTypeOption: ['One Person Room', Validators.required],
            numberGuests: ['1', Validators.required],
            date: ['', Validators.required],
            freePickup: ['Yes Please! - Pick me up on arrival', Validators.required],
            flightNumber: ['', Validators.required],
            specialRequest: ['', Validators.required],
        });
        this.form = this.formBuilder.group({
            name: [''],
            gender: ['female'],
            email: [''],
            roomTypeOption: ['One Person Room'],
            numberGuests: ['1'],
            date: [''],
            freePickup: ['Yes Please! - Pick me up on arrival'],
            flightNumber: [''],
            specialRequest: [''],
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.form.value);
        this.form.reset({});
    }
    save() {
        if (this.formData.valid) {
            // const rawValue = this.formData.getRawValue();
            let body = new HttpParams();
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            };
            this.http.post(this.url, body, httpOptions).subscribe(() => { }, (err) => { });
        }
        else {
            console.log('form is invaild');
        }
    }
};
FormComponent = __decorate([
    Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    })
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map