import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-icon-player',
  templateUrl: './icon-player.component.html',
  styleUrls: ['./icon-player.component.css'],
})
export class IconPlayerComponent {
  namePlayer:string = ''
  constructor(private manageLocalStorage: ManageLocalStorageService) {}

  getInitials(): string {
    let name = this.manageLocalStorage.data['player_name']
    let initials = (name[0] + name[1]).toUpperCase();
    return initials;
  }
}
