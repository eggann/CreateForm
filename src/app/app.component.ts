import { stringify } from 'qs';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { uploadToGoogleSheet } from './uploadToGoogleSheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private fb: FormBuilder, private http: HttpClient){}

  title = 'CreateForm';
  url = 'https://docs.google.com/forms/d/e/1FAIpQLSdzJ1qYADgvYhXTa1eCbeFGPptKSyxm6aon6p3ILFQHZ2Suvg/viewform';

  // fieldMapping = {
  //   name: 'entry.774485073',
  //   gender: 'entry.2044485490',
  //   email: 'entry.1749011696',
  //   roomTypeOptions: 'entry.1444788616',
  //   numberGuests: 'entry.1934381288',
  //   date: 'entry.2140375122',
  //   freePickup: 'entry.181767127',
  //   flightNumber: 'entry.1597213970',
  //   specialRequest: 'entry.1819819084'
  // };

}
