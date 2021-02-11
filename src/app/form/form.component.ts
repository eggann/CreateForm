import { handleSubmit } from '../../utils/handleSubmit';
import { RoomType } from './form.type';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  genders = ['male', 'female', 'other'];
  freePickups = ['Yes Please! - Pick me up on arrival', 'No Thanks! - I will make my own way there'];
  roomTypeOptions = [RoomType.One, RoomType.Two, RoomType.Three, RoomType.Four];
  selectedCurrency: RoomType;

  // url = 'https://docs.google.com/forms/d/e/1FAIpQLSdzJ1qYADgvYhXTa1eCbeFGPptKSyxm6aon6p3ILFQHZ2Suvg/viewform';

  // fieldMapping = {
  //   name: 'entry.774485073',
  //   gender: 'entry.1819819084',
  //   email: 'entry.2044485490',
  //   roomTypeOptions: 'entry.1597213970',
  //   numberGuests: 'entry.1749011696',
  //   date: 'entry.2140375122',
  //   freePickup: 'entry.181767127',
  //   flightNumber: 'entry.1444788616',
  //   specialRequest: 'entry.1934381288'
  // };

  // formData = this.formBuilder.group({
  //   name: ['', Validators.required],
  //     gender: ['female', Validators.required],
  //     email: [''],
  //     roomTypeOptions: ['', Validators.required],
  //     numberGuests: ['3', Validators.required],
  //     date: ['', Validators.required],
  //     freePickup: ['Yes Please! - Pick me up on arrival', Validators.required],
  //     flightNumber: ['', Validators.required],
  //     specialRequest: ['', Validators.required],
  // });

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['female', Validators.required],
      email: ['', Validators.required],
      roomTypeOptions: ['', Validators.required],
      numberGuests: ['', Validators.required],
      date: ['', Validators.required],
      freePickup: [''],
      flightNumber: [''],
      specialRequest: [''],
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    const value = this.form.value
    console.log(value);
    await handleSubmit(value);
    this.form.reset();
  }

  // save(){
  //   if(this.formData.valid){
  //     // const rawValue = this.formData.getRawValue();
  //     let body = new HttpParams();
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       })
  //     };
  //     this.http.post(this.url, body, httpOptions).subscribe(() => {}, (err) => {});
  //   } else {
  //     console.log('form is invalid');
  //   }
  // }

}
