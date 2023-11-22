import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../services/manage-local-storage.service';
import { PlayersService } from '../services/players.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent {
  displayCards: string = 'none';
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = [];
  numberMainPlayer: number = 0;
  selectedCard: Array<Number> = [];
  votes: Array<Number> = [];
  text: string = '';
  displayLoader: string = 'none';
  displayButton: string = 'none';

  constructor(
    public manageLocalStorage: ManageLocalStorageService,
    private players: PlayersService
  ) {}

  changeText(key: string): string {
    let name = this.manageLocalStorage.data[key];
    return name;
  }
  ngOnInit() {
    this.playersName.push(this.manageLocalStorage.data['player_name']);
    /* method to change the display of the main page, after 3 seconds */
    setTimeout(() => {
      (this.displayCards = 'none'), (this.displayCards = 'block');
    }, 1000);
  }

  getNumber(position: number): void {
    let n = Number(this.numbers[position]);
    this.numberMainPlayer = n;
    this.displayButton = 'block';
    this.changeStyleCards();
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
    this.displayButton = 'none';
    this.displayLoader = 'block';
    setTimeout(() => {
      this.displayLoader = 'none';
    }, 3000);
  }

  changeStyleCards(): void {
    let div = document.getElementById('card_number');
    if (div) {
      div.style.backgroundColor = 'blue';
      div.style.color = 'white';
      div.style.padding = '10px';
      div.style.borderRadius = '35px';
      div.style.height = '60px';
    }
  }
}
