import { Component } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';

@Component({
  selector: 'app-container-triple',
  templateUrl: './container-triple.component.html',
  styleUrls: ['./container-triple.component.css'],
})
export class ContainerTripleComponent {
  displayLoader: string = 'none';
  constructor(private countVotes: CountVotesService) {}

  countVotesFunction(): void {
    this.displayLoader = 'block';
    this.countVotes.countVotes();
    this.countVotes.numberMainPlayer = 0;

    setTimeout(() => {
      this.displayLoader = 'none';
    }, 3000);
  }

  changeDisplayButton(): string {
    if (this.countVotes.numberMainPlayer != 0) {
      return 'block';
    }
    return 'none';
  }
  changeStyleCardsPlayers(): void {
    let divs = document.getElementsByName('card_players');
    if (divs) {
      divs.forEach((div: HTMLElement) => {
        div.style.backgroundColor = '#e4a4ff';
        div.style.borderRadius = '7px';
        div.style.width = '35px';
        div.style.height = '60px';
      });
    }
  }
}
