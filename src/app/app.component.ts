import { Component } from '@angular/core';
import { ManageLocalStorageService } from './services/manage-local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  initial = 'block';
  displayCreateGame = 'none';
  data: Array<string> = [];
  displayInivite: string = 'none';
  constructor(private manageLocalStorage: ManageLocalStorageService) {}
  ngOnInit() {
    localStorage.clear();
    /* method to change the display of the main page, after 3 seconds */
    setTimeout(() => {
      (this.initial = 'none'), (this.displayCreateGame = 'block');
    }, 3000);
  }

  setDisplay(key: string): string {
    let display = 'none';
    if (localStorage.getItem(key) !== null) {
      display = 'block';
    }
    return display;
  }
}
