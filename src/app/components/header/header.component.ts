import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  displayInvite: string = 'none';
  constructor(private manageLocalStorage: ManageLocalStorageService) {}

  execute(): string {
    let name = this.manageLocalStorage.data['game_name'];
    return name;
  }
  invite(): void {
    this.displayInvite = 'block';
  }
  setStyle(): void {
    let game = document.getElementById('container-game');
    let header = document.getElementById('header-game');
    if (game && header) {
      if (this.displayInvite == 'block') {
        game.style.zIndex = '1';
      }
      if (this.displayInvite == 'none') {
        game.style.zIndex = '1';
        header.style.zIndex = '2'
      }
    }
  }
}
