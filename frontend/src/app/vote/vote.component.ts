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
    {mock_id: "Democrat", name: "New Football Helmets", description: "bjhsbcwvfdcf df scd wdsz csd cw dsb zc wjsab ihigfotujv  ui ojhg   h9uiohtg sbjcvwdhjsvcws", image_url: "http://dailyorange.com/resize/800/wp-content/uploads/2020/10/31185736/2020-10-31-dn-sufootball27.jpg"},
    {mock_id: "Green", name: "Student Bike Stations", description: "asdcsba C sa", image_url: "https://news.morgan.edu/wp-content/uploads/PAG7332-660x330.jpg"},
    {mock_id: "Independent", name: "Outdoor Activity Clubs", description: "efeads saCfs", image_url: "https://media-cdn.tripadvisor.com/media/photo-s/06/37/06/a6/morgan-monroe-state-forest.jpg"},
    {mock_id: "Libertarian", name: "Student Pet Care", description: "blah blah blah yah", image_url: "https://miro.medium.com/max/1400/1*1RqtX6heJVDOQ4bMHoT6ew.jpeg"},
    {mock_id: "Republican", name: "In-Person Graduation", description: "efefs", image_url: "https://news.morgan.edu/wp-content/uploads/feat-decgrad17.jpg"}];
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
  }


}
