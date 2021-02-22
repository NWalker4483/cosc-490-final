import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Breed } from './breed.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-breed-voter',
  templateUrl: './breed-voter.component.html',
  styleUrls: ['./breed-voter.component.css']
})
export class BreedVoterComponent implements OnInit {


  breedOptions: Breed[] = [];
  form: FormGroup;
  sliderOptions: Options = {
    floor: 1,
    ceil: 6,
    step: 1
  };

  constructor(private api: ApiService,) {
      this.form = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        input2: new FormControl([1])
      });
     }
  

  ngOnInit(): void {
    this.getBreeds();
    this.onChanges();
  }


  getBreeds(): void {
    this.api.getBreeds().subscribe(data => this.breedOptions = data);
  }
  
onChanges(): void {
  this.form.valueChanges.subscribe(val => {
    console.log(
    `Hello,

    My name is ${val.firstName} ${val.lastName}`);
  });
}

}
