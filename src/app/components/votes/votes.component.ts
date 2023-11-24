import { Component } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent {
  selectedCards: Array<any> = this.getCards();
  size: Array<number> = Array.from(
    { length: this.countVotes.votes.length },
    (_, index) => index
  );
  displaySelectedCards: string = 'none';
  votes:any = this.countVotes.votes

  constructor(private countVotes: CountVotesService) {}

  getCards(): any {
    this.selectedCards = this.countVotes.selectedCard;
    return this.selectedCards;
  }

}
