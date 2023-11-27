import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';
import { PlayersService } from '../../services/players.service';
import { CountVotesService } from 'src/app/services/count-votes.service';
import { ResetService } from 'src/app/services/reset.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent {
  displayCardsPlayers: string = 'none';
  displayTotalVotes:string = 'none'
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = this.countVotes.numberAssingPlayers;
  numberMainPlayer: any;
  displayNumberMain: string = 'none';
  selectedCard: Array<Number> = this.countVotes.numberAssingPlayers;
  votes: Array<Number> = this.countVotes.votes;
  displayGameTable: string = 'block';
  average:number = 0

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
    setTimeout(() => {
      (this.displayCardsPlayers = 'none'), (this.displayCardsPlayers = 'block');
    }, 2000);
  }

  getNumberMain(position: number): void {
    this.countVotes.getNumber(position);
    this.numberMainPlayer = this.countVotes.numberMainPlayer;
    this.countVotes.changeDisplayButton(true);
    this.average = this.countVotes.average()
  }

  getVotePlayers(position: number): void {
    this.countVotes.getNumber(position);
    for (let i = 0; i < this.selectedCard.length - 1; i++) {
      this.changeVote(i);
    }
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
}
