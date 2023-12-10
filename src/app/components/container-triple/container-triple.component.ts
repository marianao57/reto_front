import { Component, OnInit } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';
import { DisplayComponentsService } from 'src/app/services/display-components.service';

@Component({
  selector: 'app-container-triple',
  templateUrl: './container-triple.component.html',
  styleUrls: ['./container-triple.component.css'],
})
export class ContainerTripleComponent implements OnInit {
  displayLoader: boolean | undefined = false;
  n = this.countVotes.numberMainPlayer;
  displayButtonCount: boolean | undefined = false;
  displayButtonReset: boolean | undefined = false;
  resetAux: boolean | undefined = false;

  constructor(
    public countVotes: CountVotesService,
    private displayComponents: DisplayComponentsService
  ) {}

  ngOnInit() {
    this.countVotes.changeDisplayVotes(false);
  }

  countVotesFunction(): void {
    this.displayLoader = true;
    setTimeout(() => {
      (this.displayLoader = false),
        this.countVotes.changeDisplayOptions(false),
        this.displayButtonResetFunction(),
        this.displayComponents.showTotalVotes(),
        this.displayTotalVotes(),
        this.displayComponents.showMainNumber(this.countVotes.numberMainPlayer),
        this.displayComponents.styleCardsInitial(),
        this.displayComponents.showIndividualVotes();
    }, 2000);
  }

  displayButtonFunction(): boolean {
    if (this.resetAux) {
      this.resetAux = false;
      this.displayButtonResetFunction();
      return false;
    }
    const n = this.countVotes.numberMainPlayer;
    if (n && !this.displayLoader && !this.displayButtonReset) {
      this.displayButtonCount = true;
      return true;
    } else if (!this.displayButtonReset) {
      this.displayButtonCount = false;
      return false;
    }
    return false;
  }

  reset(): void {
    this.displayComponents.resetVotesPlayers();
    this.displayComponents.resetVotesTotales();
    this.displayComponents.resetOptions();
    this.countVotes.startCount = false;
    this.countVotes.resetGame(true);
    this.displayComponents.initialStyle();
    this.resetAux = true;
  }

  displayButtonResetFunction(): boolean {
    const n = this.countVotes.numberMainPlayer;
    if (this.resetAux) {
      this.displayButtonReset = false;
      this.countVotes.reset = false;
      return false;
    }
    if (!this.displayLoader && !this.displayButtonCount && n) {
      this.displayButtonReset = true;
      return true;
    } else {
      this.displayButtonReset = false;
      return false;
    }
  }

  displayTotalVotes(): void {
    const div = document.getElementById('containerTotalVotes');
    if (div) {
      div.style.visibility = 'visible';
    }
  }
}
