import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Ballot } from '../models/ballot.model';

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
    { mock_id: "Democrat", name: "New Football Helmets", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", image_url: "http://dailyorange.com/resize/800/wp-content/uploads/2020/10/31185736/2020-10-31-dn-sufootball27.jpg" },
    { mock_id: "Green", name: "Student Bike Stations", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", image_url: "https://news.morgan.edu/wp-content/uploads/PAG7332-660x330.jpg" },
    { mock_id: "Independent", name: "Outdoor Activity Clubs", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", image_url: "https://media-cdn.tripadvisor.com/media/photo-s/06/37/06/a6/morgan-monroe-state-forest.jpg" },
    { mock_id: "Libertarian", name: "Student Pet Care", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", image_url: "https://miro.medium.com/max/1400/1*1RqtX6heJVDOQ4bMHoT6ew.jpeg" },
    { mock_id: "Republican", name: "In-Person Graduation ", description: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.", image_url: "https://news.morgan.edu/wp-content/uploads/feat-decgrad17.jpg" }];
  form: FormGroup;
  electionID: string;

  constructor(private api: ApiService,) {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      input2: new FormControl([1])
    });
  }
  castBallot(proposal: Proposal) {
    var ballot: Ballot = { voterId: "12345", electionId: this.electionID, selection: proposal.mock_id };
    this.api.castBallot(ballot).subscribe((data) => {console.log(data);});
    console.log(proposal);
  }
  ngOnInit(): void {
    this.electionID = "0";
    this.api.queryWithQueryString("election").subscribe(data => { console.log(data) })
    //this.api.queryWithQueryString().subscribe(data => {console.log(data)});
  }
}
