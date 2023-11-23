import { Injectable } from '@angular/core';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class CountVotesService {
  displayCards: string = 'none';
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = [];
  numberMainPlayer: number = 0;
  selectedCard: Array<Number> = [];
  votes: Array<Number> = [];
  text: string = '';
  displayLoader: string = 'none';

  constructor(private players: PlayersService) {}

  getNumber(position: number): void {
    let n = Number(this.numbers[position]);
    this.numberMainPlayer = n;
  }
  assignNumbers(): void {
    for (let i = 0; i < 10; i++) {
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
    this.displayCards = 'none';
    this.displayLoader = 'block';
    setTimeout(() => {
      this.displayLoader = 'none';
    }, 3000);
  }
}
