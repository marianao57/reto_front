import { Component, OnInit } from '@angular/core';
import { ManageLocalStorageService } from './services/manage-local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  initial = true;
  displayCreateGame = false;
  data = [];
  title = 'reto';

  constructor(private manageLocalStorage: ManageLocalStorageService) {}

  ngOnInit() {
    setTimeout(() => {
      (this.initial = false), (this.displayCreateGame = true);
    }, 3000);
  }

  setDisplayInputPlayer(key: string): boolean {
    const value = this.manageLocalStorage.getData(key);
    if (value) {
      this.displayCreateGame = false;
      return true;
    } else {
      return false;
    }
  }
  setDisplayGame(): boolean {
    const value = this.manageLocalStorage.getData('player_name');
    if (value) {
      this.setDisplayInputPlayer('prueba');
      return true;
    } else {
      return false;
    }
  }
}
