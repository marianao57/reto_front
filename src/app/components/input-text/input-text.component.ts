import { Component } from '@angular/core';
import { VerifyTextService } from '../../services/verify-text.service';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  text: string = 'Nombra la partida';
  display: boolean = true;
  message: boolean = false;
  inputValue: string = '';
  ls: any;
  inputEscribiendo: boolean = false; // Inicialmente deshabilitado

  constructor(
    private verifyText: VerifyTextService,
    private manageLocalStorage: ManageLocalStorageService
  ) {}

  execute(): void {
    let result: number = this.verifyText.verifyNameGame(this.inputValue);
    if (result == 1) {
      this.manageLocalStorage.saveLocalStorage('game_name', this.inputValue);
      this.display = false
    } else {
      this.message = true;
    }
  }

  enableButton(event: any): void {
    this.inputEscribiendo = event.target.value.trim().length > 0;
  }
}
