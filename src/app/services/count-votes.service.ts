import { Injectable } from '@angular/core';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class CountVotesService {
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = [];
  numberMainPlayer: any;
  selectedCard: Array<Number> = [];
  voteIndividual: Array<Number> = [];
  votes: Array<Number> = [];
  text: string = '';
  displayLoader: string = 'none';
  displayVotes: string = 'none';
  startCount: boolean = false;
  reset: boolean = false;

  constructor(private players: PlayersService) {}

  getNumber(position: number): void {
    let n = Number(this.numbers[position]);
    this.numberMainPlayer = n;
  }

  assignNumbers(): void {
    for (let i = 0; i < 7; i++) {
      const randomNumber: number = Math.floor(Math.random() * 9);
      this.numberAssingPlayers.push(this.numbers[randomNumber]);
    }
    this.numberAssingPlayers.push(this.numberMainPlayer);
  }

  countVotes(): void {
    this.assignNumbers();
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

  average(): any {
    this.countVotes();
    let accumulator = 0;
    let lessCards = 0;
    let averageTotal;
    for (let i = 0; i < this.selectedCard.length; i++) {
      if (!this.selectedCard[i]) {
        lessCards++;
        continue;
      }
      accumulator += this.selectedCard[i].valueOf();
    }
    averageTotal = accumulator / (Number(this.selectedCard.length) - lessCards);
    return averageTotal.toFixed(2);
  }

  resetGame(condition: boolean): boolean {
    if (condition) {
      this.selectedCard = [];
      this.votes = [];
      this.numberAssingPlayers = [];
      this.numberMainPlayer = '';
      this.reset = true;
      return true;
    } else {
      this.reset = false;
      return false;
    }
  }

  changeDisplayVotes(conditional: boolean): void {
    for (let i = 0; i < this.numberAssingPlayers.length; i++) {
      let p = document.getElementById('votes' + i);
      if (p && conditional) {
        p.style.display = 'block';
      } else if (p && !conditional) {
        p.style.display = 'none';
      }
    }
  }

  changeDisplayOptions(condition: boolean): void {
    let div = document.getElementById('options');
    if (div) {
      if (condition) {
        div.style.display = 'flex';
      } else {
        div.style.display = 'none';
      }
    }
  }
}
