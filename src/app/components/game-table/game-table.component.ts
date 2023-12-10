import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';
import { PlayersService } from '../../services/players.service';
import { CountVotesService } from 'src/app/services/count-votes.service';
import { DisplayComponentsService } from 'src/app/services/display-components.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent {
  playersName: Array<string> = this.players.players;
  numbers = this.players.numbers;
  numberAssingPlayers = this.countVotes.numberAssingPlayers;
  numberMainPlayer: any;
  selectedCard = this.countVotes.numberAssingPlayers;
  votes = this.countVotes.votes;
  displayGameTable = true;
  average:any = 0;
  startCount: boolean = this.countVotes.startCount;

  constructor(
    public manageLocalStorage: ManageLocalStorageService,
    public players: PlayersService,
    public countVotes: CountVotesService,
    public displayComponents: DisplayComponentsService
  ) {}

  getNumberMain(position: number): void {
    if (this.countVotes.reset) {
      this.countVotes.resetGame(true);
      this.countVotes.getNumber(position);
      this.numberMainPlayer = this.countVotes.numberMainPlayer;
      this.displayComponents.showMainNumber(this.numberMainPlayer);
      this.displayComponents.showTotalVotes();
    }
    this.countVotes.startCount = true;
    this.startCount = this.countVotes.startCount;
    this.countVotes.getNumber(position);
    this.numberMainPlayer = this.countVotes.numberMainPlayer;
    this.average = this.countVotes.average();
    this.displayComponents.changeStyleCards();
  }

  changeStyleCards(i: number): void {
    const div = document.getElementById('card_number' + i);
    const text = document.getElementById('number' + i);
    if (div && text) {
      div.style.transition = 'all 0.8s ease';
      div.style.backgroundColor = '#e4a4ff';
      div.style.borderRadius = '7px';
      div.style.width = '35px';
      div.style.height = '60px';
      div.style.position = 'absolute';
      div.style.zIndex = '1';
      div.style.transform = 'scale(1.08)';
      text.style.position = 'absolute';
      text.style.zIndex = '2';
      text.style.color = '#330072';
    }
  }

  displayVotePlayer(): void {
    this.displayComponents.displayVotePlayer(this.startCount);
  }

  displayTotalVotes(): boolean {
    return this.displayComponents.totalVotes;
  }
}
