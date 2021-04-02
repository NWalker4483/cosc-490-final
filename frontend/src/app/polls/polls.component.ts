import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Proposal 1', 'Proposal 2', 'Proposal 3', 'Proposal 4', 'Proposal 5'];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Vote Count'}
  ];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCurrentStanding().subscribe((data) => {console.log(data)} )
  }

}
