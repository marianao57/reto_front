import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../services/manage-local-storage.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent {
  constructor(public manageLocalStorage: ManageLocalStorageService) {}
  
  changeText(key: string): string {
    let name = this.manageLocalStorage.data[key];
    return name;
  }
}
