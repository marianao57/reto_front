import { Component, OnInit } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  selectedCards: any;
  votes: any;
  size: any;
  average: any;
  constructor(private countVotes: CountVotesService) {}

  ngOnInit() {
    this.execute();
  }

  execute(): void {
    this.selectedCards = this.countVotes.selectedCard;
    this.votes = this.countVotes.votes;
    this.size = Array.from(Array(this.votes.length).keys());
    this.average = this.countVotes.average();
  }
}
