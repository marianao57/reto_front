import { Injectable } from '@angular/core';
import { CountVotesService } from './count-votes.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayComponentsService {
  totalVotes: boolean = false;
  buttonCountVotes: boolean = false;
  votesPlayers: boolean = false;
  invite: boolean = false;
  reset: boolean = this.countService.reset;

  constructor(private countService: CountVotesService) {}

  displayVotePlayer(count: boolean): void {
    if (count) {
      this.votesPlayers = true;
    } else {
      this.votesPlayers = false;
    }
  }

  resetVotesPlayers(): void {
    for (let i = 0; i < 8; i++) {
      let vote = document.getElementById('votePlayer' + i);
      if (vote) {
        vote.textContent = '';
      }
    }
  }

  resetVotesTotales(): void {
    let votes = document.getElementById('totalVotes');
    if (votes) {
      votes.style.visibility = 'hidden';
    }
  }

  resetOptions(): void {
    let options = document.getElementById('options');
    if (options) {
      options.style.display = 'flex';
    }
  }

  showVotesPlayers(): void {
    for (let i = 0; i < 8; i++) {
      let div: any = document.getElementById('votePlayer' + i);
      if (div) {
        div.textContent = this.countService.numberAssingPlayers[i];
      }
    }
  }

  showTotalVotes(): void {
    for (let i = 0; i < this.countService.selectedCard.length; i++) {
      let card: any = document.getElementById('cardVote' + i);
      let vote: any = document.getElementById('voteIndividual' + i);
      if (card && vote) {
        card.textContent = this.countService.selectedCard[i];
        vote.textContent = this.countService.votes[i];
      }
    }
    this.totalVotes = true;
  }

  showMainNumber(numberMain: any): void {
    let number = document.getElementById('votePlayer7');
    if (number) {
      number.textContent = numberMain;
    }
  }

  changeStyleCards(): void {
    for (let i = 0; i < 8; i++) {
      let card = document.getElementById('card' + i);
      if (card) {
        card.style.backgroundColor = '#e4a4ff';
        card.style.borderRadius = '7px';
        card.style.width = '35px';
        card.style.height = '60px';
        card.style.display = 'flex';
      }
    }
  }

  initialStyle(): void {
    for (let i = 0; i < 8; i++) {
      let div = document.getElementById('card_number' + i);
      let text = document.getElementById('number' + i);
      if (div && text) {
        div.style.backgroundColor = 'transparent';
        text.style.color = 'white';
      }
    }
  }
}
