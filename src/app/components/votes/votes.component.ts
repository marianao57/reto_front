import { Component } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';
import { DisplayComponentsService } from 'src/app/services/display-components.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent {
  selectedCards: any = 0;
  votes: any = 0;
  size: any = 0;
  average: any = 0;
  constructor(
    private countVotes: CountVotesService
  ) {}

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