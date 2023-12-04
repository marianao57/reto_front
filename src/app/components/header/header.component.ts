import { Component } from '@angular/core';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private manageLocalStorage: ManageLocalStorageService) {}

  execute(): string {
    let name = this.manageLocalStorage.data['game_name'];
    return name;
  }

  invite(): void {
    let div = document.getElementById('invite');
    if (div) {
      div.style.display = 'block';
    }
  }

  reload():void{
    location.reload()
  }
}
