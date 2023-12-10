import { Component } from '@angular/core';
import { VerifyTextService } from '../../services/verify-text.service';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  text = 'Nombra la partida';
  display = true;
  message = false;
  inputValue = '';
  inputEscribiendo = false; // Inicialmente deshabilitado

  constructor(
    private verifyText: VerifyTextService,
    private manageLocalStorage: ManageLocalStorageService
  ) {}

  execute(): void {
    const result = this.verifyText.verifyNameGame(this.inputValue);
    if (result == 1) {
      this.manageLocalStorage.saveLocalStorage('game_name', this.inputValue);
      this.display = false;
    } else {
      this.message = true;
    }
  }

  enableButton(event: any): void {
    this.inputEscribiendo = event.target.value.trim().length > 0;
  }
}
