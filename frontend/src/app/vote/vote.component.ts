import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Breed } from '../models/breed.model';

import { Proposal } from '../models/proposal.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  ActiveProposals: Proposal[] = [
    {name: "New Fire Hydrant", description: "efefs", image_url: ""},
    {name: "New Fire Hydrant", description: "efefs", image_url: ""}];
  breedOptions: Breed[] = [];
  form: FormGroup;

  constructor(private api: ApiService, ) {
      this.form = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        input2: new FormControl([1])
      });
     }

  ngOnInit(): void {

    this.api.getActiveProposals().subscribe(data => console.log(data));
    this.onChanges();
  }

  // getBreeds(): void {
  //   this.api.getBreeds().subscribe(data => this.breedOptions = data);
  // }

onChanges(): void {
  this.form.valueChanges.subscribe(val => {

    // this.getBreeds();
  });
}

}
