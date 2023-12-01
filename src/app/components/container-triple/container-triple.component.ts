import { Component } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';
import { DisplayComponentsService } from 'src/app/services/display-components.service';
import { ManageLocalStorageService } from 'src/app/services/manage-local-storage.service';

@Component({
  selector: 'app-container-triple',
  templateUrl: './container-triple.component.html',
  styleUrls: ['./container-triple.component.css'],
})
export class ContainerTripleComponent {
  displayLoader: boolean = false;
  n: any = this.countVotes.numberMainPlayer;
  displayButtonCount: boolean = false;
  displayButtonReset: boolean = false;
  resetAux: boolean = false;

  constructor(
    private countVotes: CountVotesService,
    private displayComponents: DisplayComponentsService,
    private manage: ManageLocalStorageService
  ) {}

  ngOnInit() {
    this.countVotes.changeDisplayVotes(false);
  }

  countVotesFunction(): void {
    this.displayLoader = true;
    setTimeout(() => {
      (this.displayLoader = false),
        this.countVotes.changeDisplayOptions(false),
        (this.displayComponents.totalVotes = true),
        (this.displayComponents.votesPlayers = true),
        this.displayButtonResetFunction();
    }, 2000);
  }

  displayButtonFunction(): boolean {
    let n = this.countVotes.numberMainPlayer;
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
    this.resetAux = true;
  }

  displayButtonResetFunction(): boolean {
    let n = this.countVotes.numberMainPlayer;
    if (this.resetAux) {
      this.displayButtonReset = false;
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
}
