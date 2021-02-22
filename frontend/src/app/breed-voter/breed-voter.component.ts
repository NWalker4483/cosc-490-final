import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Breed } from './breed.model';
@Component({
  selector: 'app-breed-voter',
  templateUrl: './breed-voter.component.html',
  styleUrls: ['./breed-voter.component.css']
})
export class BreedVoterComponent implements OnInit {
  breedOptions: Breed[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    this.api.getBreeds().subscribe(data => this.breedOptions = data);
  }


}
