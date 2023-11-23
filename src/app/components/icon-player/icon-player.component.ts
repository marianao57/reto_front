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

  verifyName():void{
    this.namePlayer = this.manageLocalStorage.data['player_name']
    if(this.namePlayer){
      this.getInitials(this.namePlayer)
    }
    else{
      this.getInitials('NULL')
    }
  }

  getInitials(name:string): string {
    let initials = (name[0] + name[1]).toUpperCase();
    return initials;
  }
}
