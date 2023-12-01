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
  playersName: Array<String> = this.players.players;
  numbers: Array<Number> = this.players.numbers;
  numberAssingPlayers: Array<Number> = this.countVotes.numberAssingPlayers;
  numberMainPlayer: any;
  selectedCard: Array<Number> = this.countVotes.numberAssingPlayers;
  votes: Array<Number> = this.countVotes.votes;
  displayGameTable: boolean = true;
  average: number = 0;
  startCount: boolean = this.countVotes.startCount;


  constructor(
    public manageLocalStorage: ManageLocalStorageService,
    private players: PlayersService,
    public countVotes: CountVotesService,
    public displayComponents: DisplayComponentsService
  ) {}

  ngOnInit() {}

  getNumberMain(position: number): void {
    if(this.countVotes.reset){
      console.log("entro");
      this.countVotes.resetGame(true)
    }
    this.countVotes.startCount = true
    this.startCount = this.countVotes.startCount;
    this.countVotes.getNumber(position);
    this.numberMainPlayer = this.countVotes.numberMainPlayer;
    this.average = this.countVotes.average();
  }

  changeStyleCards(i: number): void {
    let div = document.getElementById('card_number' + i);
    let text = document.getElementById('number' + i);
    if (div && text) {
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

  //aun no funciona, para cambiar los estilos de las cartas de los jugadores
  styleCardsPlayers(): void {
    let card = document.getElementById('card5');
    if (card) {
      card.style.backgroundColor = 'red';
      card.style.borderRadius = '7px';
      card.style.width = '35px';
      card.style.height = '60px';
    }
  }
}
