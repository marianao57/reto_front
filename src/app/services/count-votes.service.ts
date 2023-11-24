import { Injectable } from '@angular/core';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class CountVotesService {
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = [];
  numberMainPlayer: number = 0;
  selectedCard: Array<Number> = [];
  voteIndividual: Array<Number> = [];
  votes: Array<Number> = [];
  text: string = '';
  displayLoader: string = 'none';

  constructor(private players: PlayersService) {}

  getNumber(position: number): void {
    let n = Number(this.numbers[position]);
    this.numberMainPlayer = n;
  }
  assignNumbers(): void {
    for (let i = 0; i < 8; i++) {
      const randomNumber: number = Math.floor(Math.random() * 9);
      this.numberAssingPlayers.push(this.numbers[randomNumber]);
    }
  }

  countVotes(): void {
    this.assignNumbers();
    this.numberAssingPlayers.push(this.numberMainPlayer);
    this.selectedCard = this.numberAssingPlayers;
    let count = 0;
    for (let i = 0; i < this.selectedCard.length; i++) {
      for (let j = 0; j < this.selectedCard.length; j++) {
        if (this.numberAssingPlayers[j] == this.selectedCard[i]) {
          count++;
        }
      }
      this.votes.push(count);
      count = 0;
    }

    this.definitiveCards();
  }

  definitiveCards(): void {
    let cards = [];
    let votes: any[] = [];
    let index = 0;
    cards = this.selectedCard.reduce(
      (accumulator: Array<Number>, currentValue: Number) => {
        if (!accumulator.includes(currentValue)) {
          index = this.selectedCard.indexOf(currentValue);
          accumulator.push(currentValue);
          votes.push(this.votes[index]);
        }
        return accumulator;
      },
      []
    );
    this.selectedCard = cards;
    this.votes = votes;
  }

  changeVote(position: number): string {
    let p: any = document.getElementById('card_selectd');
    if (p) {
      p.textContent = this.selectedCard[position];
      return p;
    } else {
      return '';
    }
  }

  getVotes(position: number): string {
    let p: any = document.getElementById('votes'+position);
    if (p) {
      p.textContent = this.votes[position];
      return p;
    } else {
      return '';
    }
  }
}
