import { Injectable } from '@angular/core';
import { ManageLocalStorageService } from './manage-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  nameMainPlayer: string = this.manageLocalStorage.getData('player_name');
  players: Array<string> = [
    'Jose',
    'Camila',
    'Laura',
    'Manuel',
    'Fernando',
    'Samuel',
    'Monica',
    this.nameMainPlayer,
  ];
  numbers = this.fillArrayNumbers();

  constructor(private manageLocalStorage: ManageLocalStorageService) {}

  fillArrayNumbers(): Array<number> {
    const numbers: Array<number> = [];
    for (let i = 0; i < 9; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      if (numbers.includes(numeroAleatorio)) {
        i = i - 1;
      } else {
        numbers.push(numeroAleatorio);
      }
    }
    return numbers;
  }
}
