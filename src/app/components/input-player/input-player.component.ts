import { Component } from '@angular/core';
import { VerifyTextService } from '../../services/verify-text.service';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-input-player',
  templateUrl: './input-player.component.html',
  styleUrls: ['./input-player.component.css'],
})
export class InputPlayerComponent {
  userName: string = '';
  display: boolean = true;
  displayMessage: boolean = false;
  constructor(
    private VerifyTextService: VerifyTextService,
    private manageLocalStorage: ManageLocalStorageService
  ) {}

  /* method to verify that the username complies and change the display of the components */
  execute(): void {
    let result: number = this.VerifyTextService.verifyNameGame(this.userName);
    if (result == 1) {
      this.manageLocalStorage.saveLocalStorage('player_name', this.userName);
      this.display = false;
    } else {
      this.displayMessage = true;
    }
  }
}
