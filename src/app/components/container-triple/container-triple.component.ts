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
  ngOnInit() {
    this.countVotes.changeDisplayButton(false);
    this.countVotes.hideVotes(false);
  }

  countVotesFunction(): void {
  
    this.countVotes.changeDisplayButton(false);
    this.displayLoader = 'block';
    this.countVotes.countVotes();
    setTimeout(() => {
      (this.displayLoader = 'none'),
        (this.countVotes.hideVotes(true),
        this.countVotes.changeDisplayOptions(false),
        this.countVotes.changeDisplayTotalVotes(true));
    }, 2000);
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
