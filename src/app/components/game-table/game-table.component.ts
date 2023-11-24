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
  col: number = 9;
  displayCardsPlayers: string = 'none';
  displayOptions: string = 'block';
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = this.countVotes.numberAssingPlayers;
  numberMainPlayer: number = this.getNumberMain();
  displayNumberMain: string = 'none';
  selectedCard: Array<Number> = this.countVotes.numberAssingPlayers;
  votes: Array<Number> = this.countVotes.votes;
  text: string = '';
  displayLoader: string = this.countVotes.displayLoader;
  totalVotes: string = 'none';
  i: number = 0;

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
      (this.displayCardsPlayers = 'none'), (this.displayCardsPlayers = 'block');
    }, 1000);
  }

  getNumber(position: number): void {
    this.countVotes.getNumber(position);
    for (let i = 0; i < this.selectedCard.length; i++) {
      this.changeVote(i);
    }
    this.displayCardsPlayers = 'none';
    this.displayOptions = 'block';
    setTimeout(() => {
      (this.displayCardsPlayers = 'none'),
        ((this.totalVotes = 'block'),
        (this.displayCardsPlayers = 'block'),
        (this.displayOptions = 'none'),
        (this.displayNumberMain = 'block'));
    }, 2000);
    this.numberMainPlayer = this.getNumberMain();
  }

  changeVote(position: number): void {
    let p: any = document.getElementById('selected_card');
    if (p) {
      p.textContent = this.selectedCard[position];
    }
  }

  changeStyleCards(i: number): void {
    let div = document.getElementById('card_number' + i);
    let text: any = '';
    text = document.getElementById('text' + i);

    if (div) {
      div.style.backgroundColor = '#e4a4ff';
      div.style.borderRadius = '7px';
      div.style.width = '35px';
      div.style.height = '60px';
    }
  }

  getNumberMain(): number {
    let n = this.countVotes.numberMainPlayer;
    return n;
  }
}
