import { Component } from '@angular/core';
import { VerifyTextService } from '../services/verify-text.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  text: string = 'Nombra la partida';
  inputValue: string = '';
  display: string = 'block';
  message: string = 'none';
  inputEscribiendo: boolean = false; // Inicialmente deshabilitado

  constructor(private verifyText: VerifyTextService) {}

  execute(): void {
    let result: number = this.verifyText.verifyNameGame(this.inputValue);
    if (result == 1) {
      this.display = 'none';
    } else {
      this.message = 'block';
    }
  }


  enableButton(event: any): void {
    this.inputEscribiendo = event.target.value.trim().length > 0;
  }
}
