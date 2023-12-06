import { Component } from '@angular/core';
import { CountVotesService } from 'src/app/services/count-votes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  
  constructor(private countVotes: CountVotesService) {}
}
