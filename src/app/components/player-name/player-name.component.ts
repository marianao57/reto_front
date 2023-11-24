import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css'],
})
export class PlayerNameComponent {
  constructor(private manageLocalStorage: ManageLocalStorageService) {}
  
  execute(): string {
    let name = this.manageLocalStorage.data['player_name'];
    return name;
  }
}
