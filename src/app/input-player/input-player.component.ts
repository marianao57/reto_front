import { Component } from '@angular/core';
import { VerifyTextService } from '../services/verify-text.service';

@Component({
  selector: 'app-input-player',
  templateUrl: './input-player.component.html',
  styleUrls: ['./input-player.component.css'],
})
export class InputPlayerComponent {
  userName: string = '';
  displayCreate: string = 'block';
  displayGameTable: string = 'none';
  displayMessage: string = 'none';
  constructor(private VerifyTextService: VerifyTextService) {}

  /* method to verify that the username complies and change the display of the components */
  execute(): void {
    let result: number = this.VerifyTextService.verifyNameGame(this.userName);
    if (result == 1) {
      this.displayCreate = 'none';
      this.displayGameTable = 'block';
    } else {
      this.displayMessage = 'block';
    }
  }
}
