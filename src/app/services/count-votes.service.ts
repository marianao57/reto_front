import { Injectable } from '@angular/core';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class CountVotesService {
  playersName: any = this.players.players;
  numbers: any = this.players.numbers;
  numberAssingPlayers: any = [];
  numberMainPlayer: any;
  selectedCard: any = [];
  voteIndividual: any = [];
  votes: any = [];
  text: any = '';
  displayLoader: any = 'none';
  displayVotes: any = 'none';
  startCount: any = false;
  reset: any = false;

  constructor(private players: PlayersService) {}

  getNumber(position: number): void {
    const n = Number(this.numbers[position]);
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
    const votes: any[] = [];
    let index = 0;
    cards = this.selectedCard.reduce(
      (accumulator: Array<number>, currentValue: number) => {
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

  average(): string {
    this.countVotes();
    let accumulator = 0;
    let lessCards = 0;
    for (let i = 0; i < this.selectedCard.length; i++) {
      if (!this.selectedCard[i]) {
        lessCards++;
        continue;
      }
      accumulator += this.selectedCard[i].valueOf();
    }
    const averageTotal =
      accumulator / (Number(this.selectedCard.length) - lessCards);
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
      const p = document.getElementById('votes' + i);
      if (p && conditional) {
        p.style.display = 'block';
      } else if (p && !conditional) {
        p.style.display = 'none';
      }
    }
  }

  changeDisplayOptions(condition: boolean): void {
    const div = document.getElementById('options');
    if (div) {
      if (condition) {
        div.style.display = 'flex';
      } else {
        div.style.display = 'none';
      }
    }
  }
}
