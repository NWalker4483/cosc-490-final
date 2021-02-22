import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Breed } from './breed.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-breed-voter',
  templateUrl: './breed-voter.component.html',
  styleUrls: ['./breed-voter.component.css']
})
export class BreedVoterComponent implements OnInit {


  breedOptions: Breed[] = [];
  form: FormGroup;
  constructor(private api: ApiService,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        name: '',
        email: '',
        message: ''
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

    My name is ${val.name} and my email is ${val.email}.

    I would like to tell you that ${val.message}.`);
  });
}

}
