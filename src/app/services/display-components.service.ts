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
      votes.style.display = 'none';
    }
  }

  resetOptions(): void {
    let options = document.getElementById('options');
    if (options) {
      options.style.display = 'flex';
    }
  }
}
