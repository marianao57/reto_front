import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  initial = 'block';
  displayCreateGame = 'none';
  displayCreateUser = 'none';

  ngOnInit() {
    /* method to change the display of the main page, after 3 seconds */
    setTimeout(() => {
      (this.initial = 'none'), (this.displayCreateGame = 'block');
    }, 3000);
  }

  setDisplay(): void {
    if (this.displayCreateGame == 'none' && this.initial == 'none') {
      this.displayCreateUser = 'block';
    } else {
      this.displayCreateUser = 'none';
    }
  }
}
