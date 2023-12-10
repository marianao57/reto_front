import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageLocalStorageService {
  data: { [key: string]: any } = { };


  saveLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
    this.data[key] = value;
  }

  getData(key: string): string {
    const name = this.data[key];
    return name;
  }
}
