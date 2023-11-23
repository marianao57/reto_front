import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';
import { PlayersService } from '../../services/players.service';
import { CountVotesService } from 'src/app/services/count-votes.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent {
  displayCards: string = this.countVotes.displayCards;
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = this.countVotes.numberAssingPlayers;
  numberMainPlayer: number = this.countVotes.numberMainPlayer;
  selectedCard: Array<Number> = this.countVotes.selectedCard;
  votes: Array<Number> = this.countVotes.votes;
  text: string = '';
  displayLoader: string = this.countVotes.displayLoader;

  constructor(
    public manageLocalStorage: ManageLocalStorageService,
    private players: PlayersService,
    private countVotes: CountVotesService
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
    this.countVotes.getNumber(position);
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
