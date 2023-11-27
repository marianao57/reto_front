import { Component } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent {
  selectedCards: any = 0;
  displaySelectedCards: string = 'none';
  votes: any = 0;
  size:any = 0

  constructor(private countVotes: CountVotesService) {}
  ngOnInit() {
    this.execute();
  }
  execute(): void {
    this.countVotes.countVotes()
    this.selectedCards = this.countVotes.selectedCard;
    this.votes = this.countVotes.votes;
    this.size= Array.from(Array(this.votes.length-1).keys());
    this.displaySelectedCards = 'block';

  }
}
