import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResetService {
  displayGameTable: string = 'block';
  constructor() {}

  setDisplay(display:string):string{
    this.displayGameTable = display
    return display
  }
}
