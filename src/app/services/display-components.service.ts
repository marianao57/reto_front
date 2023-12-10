import { Injectable } from '@angular/core';
import { CountVotesService } from './count-votes.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayComponentsService {
  totalVotes = false;
  buttonCountVotes = false;
  votesPlayers = false;
  invite = false;
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
      const vote = document.getElementById('votePlayer' + i);
      if (vote) {
        vote.textContent = '';
      }
    }
  }

  resetVotesTotales(): void {
    const votes = document.getElementById('totalVotes');
    if (votes) {
      votes.style.visibility = 'hidden';
    }
  }

  resetOptions(): void {
    const options = document.getElementById('options');
    if (options) {
      options.style.display = 'flex';
    }
  }

  showTotalVotes(): void {
    for (let i = 0; i < this.countService.selectedCard.length; i++) {
      const card: any = document.getElementById('cardVote' + i);
      const vote: any = document.getElementById('voteIndividual' + i);
      if (card && vote) {
        card.textContent = this.countService.selectedCard[i];
        vote.textContent = this.countService.votes[i];
      }
    }
    this.totalVotes = true;
  }
  
  showIndividualVotes():void{
    for (let i = 0; i < this.countService.numberAssingPlayers.length; i++) {
      const voteIndividual: any = document.getElementById('votePlayer' + i);
      if (voteIndividual) {
        voteIndividual.textContent = this.countService.numberAssingPlayers[i];
      }
    }
  }

  showMainNumber(numberMain: any): void {
    const number = document.getElementById('votePlayer7');
    if (number) {
      number.textContent = numberMain;
    }
  }

  changeStyleCards(): void {
    for (let i = 0; i < 8; i++) {
      const card = document.getElementById('card' + i);
      if (card) {
        card.style.transition = 'all 0.5s ease';
        card.style.backgroundColor = '#e4a4ff';
        card.style.borderRadius = '7px';
        card.style.width = '35px';
        card.style.height = '60px';
        card.style.display = 'flex';
      }
    }
  }

  styleCardsInitial(): void {
    for (let i = 0; i < 8; i++) {
      const card = document.getElementById('card' + i);
      if (card) {
        card.style.transition = 'all 0.5s ease';
        card.style.backgroundColor = 'transparent';
        card.style.borderRadius = '7px';
        card.style.width = '35px';
        card.style.height = '60px';
        card.style.display = 'flex';
      }
    }
  }

  initialStyle(): void {
    for (let i = 0; i < 8; i++) {
      const div = document.getElementById('card_number' + i);
      const text = document.getElementById('number' + i);
      if (div && text) {
        div.style.backgroundColor = 'transparent';
        text.style.color = 'white';
      }
    }
  }
}
