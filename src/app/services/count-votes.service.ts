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

  constructor(private players: PlayersService) {}

  getNumber(position: number): void {
    let n = Number(this.numbers[position]);
    this.numberMainPlayer = n;
  }

  assignNumbers(): void {
    for (let i = 0; i < 9; i++) {
      const randomNumber: number = Math.floor(Math.random() * 9);
      this.numberAssingPlayers.push(this.numbers[randomNumber]);
    }
  }

  countVotes(): void {
    this.assignNumbers();
    this.numberAssingPlayers.push(this.numberMainPlayer);
    this.selectedCard = this.numberAssingPlayers;
    let count = 0;
    for (let i = 0; i < this.selectedCard.length - 1; i++) {
      for (let j = 0; j < this.selectedCard.length - 1; j++) {
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
    let p: any = document.getElementById('votes' + position);
    if (p) {
      p.textContent = this.votes[position];
      return p;
    } else {
      return '';
    }
  }

  average(): number {
    this.countVotes()
    let accumulator = 0;
    let lessCards = 0
    let averageTotal;
    for (let i = 0; i < this.selectedCard.length; i++) {
      if(!this.selectedCard[i]){
        lessCards ++
        continue
      }
      accumulator += this.selectedCard[i].valueOf();
    }
    averageTotal = accumulator / (Number(this.selectedCard.length) - lessCards);
    console.log(accumulator);
    return averageTotal;
  }

  resetGame(): void {
    this.selectedCard = [];
    this.votes = [];
    this.numberMainPlayer;
  }

  changeDisplayButton(condition: boolean): void {
    let button = document.getElementById('btn');
    if (button) {
      if (this.numberMainPlayer && condition) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }

  changeDisplayVotes(condition: boolean, div: any): void {
    if (div) {
      if (this.numberMainPlayer && condition) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }
  }

  hideVotes(condition: boolean): void {
    for (let i = 0; i < 9; i++) {
      if (i == 4 || i == 7) {
        continue;
      }
      let div = document.getElementById('votes' + i);
      this.changeDisplayVotes(condition, div);
    }
  }
  changeDisplayTotalVotes(condition: boolean): void {
    let div = document.getElementById('totalVotes');
    if (div) {
      if (condition) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }
  }
  changeDisplayOptions(condition: boolean): void {
    let div = document.getElementById('options');
    if (div) {
      if (condition) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }
  }
}
