import { Component } from '@angular/core';
import { ManageLocalStorageService } from './services/manage-local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  initial: boolean = true;
  displayCreateGame: boolean = false;
  data: Array<string> = [];
  title: string | undefined = 'reto';
  constructor(private manageLocalStorage: ManageLocalStorageService) {}
  ngOnInit() {
    console.log(this.displayCreateGame);
    setTimeout(() => {
      (this.initial = false), (this.displayCreateGame = true);
    }, 3000);
  }

  setDisplayInputPlayer(key:string) :boolean {
    let value = this.manageLocalStorage.getData(key)
    if(value){
      this.displayCreateGame = false
      return true
    }
    else{
      return false
    }
  }
  setDisplayGame():boolean{
    let value = this.manageLocalStorage.getData('player_name')
    if(value){
      this.setDisplayInputPlayer('prueba')
      return true
    }
    else{
      return false
    }
  }
}
