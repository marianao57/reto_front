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
  }

  changeDisplayButton(): string {
    if (this.countVotes.numberMainPlayer != 0) {
      return 'block';
    }
    return 'none';
  }
}
